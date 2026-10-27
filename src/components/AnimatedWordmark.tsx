"use client";

export default function AnimatedWordmark({ text = "MainWeb" }: { text?: string }) {
  const letters = Array.from(text);

  return (
    <span
      className="animated-wordmark-container relative inline-flex items-center"
      aria-label={text}
    >
      <span className="brand-wordmark font-display text-[18px] leading-none font-black tracking-[-0.045em] select-none flex items-center">
        {letters.map((char, index) => {
          const isI = char.toLowerCase() === "i";
          return (
            <span
              key={index}
              className={`lottie-letter inline-block ${isI ? "lottie-letter-i" : ""}`}
              style={{
                animationDelay: `${index * 52}ms`,
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
        className="lottie-trace absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full pointer-events-none"
      />
    </span>
  );
}
