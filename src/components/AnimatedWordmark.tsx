"use client";

import React from "react";

export default function AnimatedWordmark({ text = "MainWeb" }: { text?: string }) {
  const letters = Array.from(text);

  return (
    <span className="logo-animated-wordmark font-display" aria-label={text}>
      {letters.map((char, index) => (
        <span
          key={index}
          style={{ "--i": index + 1 } as React.CSSProperties}
          className="logo-jelly-char"
        >
          {char}
        </span>
      ))}
    </span>
  );
}
