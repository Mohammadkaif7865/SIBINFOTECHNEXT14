"use client";

import { useState, useRef } from "react";

export default function ColorPaletteExtractor() {
  const [colors, setColors] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const fileInputRef = useRef();

  const extractColors = (img) => {
    const maxDim = 200;
    const scale = Math.min(maxDim / img.width, maxDim / img.height, 1);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const colorMap = new Map();

    for (let i = 0; i < imageData.length; i += 4 * 5) { // sample every 5 pixels
      const r = imageData[i];
      const g = imageData[i + 1];
      const b = imageData[i + 2];
      const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
      colorMap.set(hex, (colorMap.get(hex) || 0) + 1);
    }

    const sortedColors = Array.from(colorMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([hex]) => hex);

    setColors(sortedColors);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        if (img.naturalWidth && img.naturalHeight) {
          extractColors(img);
        } else {
          console.error("Image dimensions not available.");
        }
      };
      img.onerror = () => {
        console.error("Failed to load image.");
      };
      img.src = event.target.result;
      setImageURL(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const resetTool = () => {
    setColors([]);
    setImageURL(null);
    fileInputRef.current.value = "";
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "2rem", backgroundColor: "#f8fbff" }}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>🎨 Color Palette Extractor</h1>
        <p style={styles.subheading}>Upload an image to extract its color palette.</p>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          style={styles.input}
        />

        {imageURL && (
          <div style={{ textAlign: "center" }}>
            <img src={imageURL} alt="Uploaded preview" style={styles.preview} />
            <button style={styles.resetBtn} onClick={resetTool}>Reset</button>
          </div>
        )}

        {colors.length > 0 && (
          <div style={styles.palette}>
            {colors.map((color, index) => (
              <div
                key={index}
                style={{ ...styles.colorBox, backgroundColor: color }}
                title={color}
                onClick={() => navigator.clipboard.writeText(color)}
              >
                <span style={styles.colorText}>{color}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: 700,
    margin: "3rem auto",
    background: "#fff",
    padding: "2.5rem 3rem",
    borderRadius: 12,
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    textAlign: "center",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: 26,
    fontWeight: 600,
    color: "#004aad",
    marginBottom: "0.5rem",
  },
  subheading: {
    fontSize: 15,
    color: "#666",
    marginBottom: "1.5rem",
  },
  input: {
    display: "block",
    margin: "0 auto 2rem",
    fontSize: 15,
  },
  preview: {
    maxWidth: "100%",
    maxHeight: 300,
    marginBottom: 20,
    borderRadius: 8,
  },
  palette: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1rem",
    marginTop: "2rem",
  },
  colorBox: {
    width: 100,
    height: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 500,
    fontSize: 14,
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  colorText: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: "2px 6px",
    borderRadius: 6,
  },
  resetBtn: {
    marginTop: 12,
    backgroundColor: "#ddd",
    padding: "8px 14px",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 14,
  },
};
