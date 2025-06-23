"use client";
import { useState } from "react";

export default function PasswordGenerator() {
  const [activeTab, setActiveTab] = useState("words");
  const [length, setLength] = useState(12);
  const [memorable, setMemorable] = useState("");
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setOptions((prev) => ({ ...prev, [name]: checked }));
  };

  const generatePassword = () => {
    const charset = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()-_=+[]{}|;:,.<>?/",
    };

    let characters = "";
    Object.keys(options).forEach((key) => {
      if (options[key]) characters += charset[key];
    });

    if (!characters) {
      alert("Please select at least one character option.");
      return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    if (activeTab === "words" && memorable.trim()) {
      password = memorable + "-" + password;
    }

    setGeneratedPassword(password);
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "2rem", backgroundColor: "#f8fbff" }}>
    <div style={styles.wrapper}>
      <h1 style={styles.title}>🔐 Password Generator</h1>
      <p style={styles.subtext}>
        Create strong passwords that meet even the strictest security requirements.
      </p>

      <div style={styles.tabs}>
        <button
          onClick={() => setActiveTab("words")}
          style={{
            ...styles.tabBtn,
            ...(activeTab === "words" ? styles.tabActive : {}),
          }}
        >
          Words
        </button>
        <button
          onClick={() => setActiveTab("characters")}
          style={{
            ...styles.tabBtn,
            ...(activeTab === "characters" ? styles.tabActive : {}),
          }}
        >
          Characters
        </button>
      </div>

      <div style={styles.form}>
        {activeTab === "words" && (
          <>
            <input
              type="text"
              placeholder="Enter your memorable words (optional)"
              value={memorable}
              onChange={(e) => setMemorable(e.target.value)}
              style={styles.input}
            />
            <div style={styles.checkboxes}>
              {["uppercase", "lowercase", "numbers", "symbols"].map((key) => (
                <label key={key} style={styles.label}>
                  <input
                    type="checkbox"
                    name={key}
                    checked={options[key]}
                    onChange={handleCheckboxChange}
                  />
                  {" " + key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
              ))}
            </div>
          </>
        )}

        {activeTab === "characters" && (
          <>
            <div style={styles.checkboxes}>
              {["uppercase", "lowercase", "numbers", "symbols"].map((key) => (
                <label key={key} style={styles.label}>
                  <input
                    type="checkbox"
                    name={key}
                    checked={options[key]}
                    onChange={handleCheckboxChange}
                  />
                  {" " + key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
              ))}
            </div>
            <div style={styles.sliderLabel}>
              Password length: <strong>{length}</strong>
            </div>
            <input
              type="range"
              min="6"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              style={styles.slider}
            />
          </>
        )}

        <button onClick={generatePassword} style={styles.button}>
          Generate a password
        </button>
      </div>

      {generatedPassword && (
        <div style={styles.result}>
          <strong>Generated Password:</strong>
          <br />
          {generatedPassword}
        </div>
      )}
    </div>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: 640,
    margin: "3rem auto",
    background: "#fff",
    padding: "2.5rem 3rem",
    borderRadius: 12,
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    textAlign: "center",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "26px",
    fontWeight: 600,
    color: "#004aad",
    marginBottom: "0.5rem",
    textAlign: "center",
  },
  subtext: {
    fontSize: "15px",
    color: "#666",
    textAlign: "center",
    marginBottom: "2rem",
  },
  heading: {
    fontSize: 32,
    marginBottom: "0.5rem",
    color: "#111",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    margin: "1.5rem auto",
    border: "1px solid #ddd",
    borderRadius: 8,
    overflow: "hidden",
    width: 300,
  },
  tabBtn: {
    flex: 1,
    padding: "0.7rem 1rem",
    border: "none",
    background: "#f1f1f1",
    color: "#555",
    fontWeight: 500,
    cursor: "pointer",
    fontSize: 14,
  },
  tabActive: {
    backgroundColor: "#fff",
    color: "#0056ff",
    borderBottom: "2px solid #0056ff",
    zIndex: 1,
  },
  form: {
    marginTop: "1.5rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: 5,
    fontSize: 14,
    marginBottom: "1rem",
  },
  checkboxes: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
  label: {
    fontSize: 14,
  },
  sliderLabel: {
    fontSize: 14,
    marginTop: "1rem",
  },
  slider: {
    width: "100%",
    marginTop: "0.5rem",
  },
  button: {
    background: "#0056ff",
    color: "#fff",
    padding: "0.8rem 1.6rem",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 16,
    marginTop: "1.5rem",
  },
  result: {
    marginTop: "2rem",
    background: "#e6efff",
    padding: "1rem",
    borderRadius: 6,
    fontFamily: "'Courier New', monospace",
    fontSize: 16,
    color: "#00357a",
    wordBreak: "break-all",
  },
};
