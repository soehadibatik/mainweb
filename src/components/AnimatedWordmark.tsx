"use client";

import { useState, useCallback } from "react";

export default function AnimatedWordmark({ text = "MainWeb" }: { text?: string }) {
  const [waveCount, setWaveCount] = useState(0);

  const triggerAnimation = useCallback(() => {
    setWaveCount((prev) => prev + 1);
  }, []);

  const letters = Array.from(text);

  return (
    <span
      className="animated-wordmark-container relative inline-flex items-center"
      onMouseEnter={triggerAnimation}
      onClick={triggerAnimation}
    >
      <span className="brand-wordmark font-display text-[18px] leading-none font-black tracking-[-0.045em] select-none flex items-center">
        {letters.map((char, index) => {
          const isI = char.toLowerCase() === "i";
          return (
            <span
              key={`${waveCount}-${index}`}
              className={`lottie-letter inline-block ${isI ? "lottie-letter-i" : ""}`}
              style={{
                animationDelay: `${index * 42}ms`,
              }}
            >
              {char}
            </span>
          );
        })}
      </span>
      {/* Lottie-style vector trace underline */}
      <span
        aria-hidden
        key={`trace-${waveCount}`}
        className="lottie-trace absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full pointer-events-none"
      />
    </span>
  );
}
