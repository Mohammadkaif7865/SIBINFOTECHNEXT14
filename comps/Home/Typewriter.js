import React, { useEffect, useState } from "react";

const words = [
  "Digital Marketing Solutions",
  "Google & Facebook Ads",
  "Digital Marketing Solution",
  "Social Media Marketing",
  "Search Engine Optimization",
  "Website Designing",
];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 300);
    } else {
      timeout = setTimeout(() => {
        setText(
          deleting
            ? currentWord.slice(0, text.length - 1)
            : currentWord.slice(0, text.length + 1)
        );
      }, deleting ? 40 : 75);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <span className="heroTypewriter">
      <i className="text_white typewriterText">{text}</i>
      <span className="typewriterCursor" aria-hidden="true">
        |
      </span>
    </span>
  );
};

export default Typewriter;
