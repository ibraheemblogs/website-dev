import React, { useState, useEffect, useRef } from "react";
import "./TextFadeSwitcher.css";

const TextFadeSwitcher = () => {
  const [indices, setIndices] = useState({
    current: 0,
    next: 1,
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const texts = ["Partner", "Excellence"];
  const interval = 3300;

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setIndices((prev) => ({
          current: prev.next,
          next: (prev.next + 1) % texts.length,
        }));
        setIsAnimating(false);
      }, 3000);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, texts.length]);

  return (
    <span className="text-switcher-wrapper">
      <span
        className={`text-switcher-item ${
          isAnimating ? "fade-out" : ""
        } text-yellow-500`}
        aria-hidden={isAnimating}
      >
        {texts[indices.current]}
      </span>

      {/* {isAnimating && (
        <span className="text-switcher-item fade-in" aria-hidden={!isAnimating}>
          {texts[indices.next]}
        </span>
      )} */}
    </span>
  );
};
export default TextFadeSwitcher;
