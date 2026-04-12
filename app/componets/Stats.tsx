"use client";

import { useEffect, useState } from "react";

const descriptions = [
  "I'm a Mobile App Developer crafting high-performance. Specializing in React Native and cross-platform development, I turn concepts into polished, scalable mobile experiences that users love.",
  "My journey in app development started in high school where curiosity sparked a passion for building. Today, with 2+ years of professional experience, I craft high-performance mobile applications."
];

export default function Stats() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % descriptions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-rotator relative mt-6 min-h-[120px] sm:min-h-[100px] md:min-h-[110px] max-w-2xl mx-auto md:mx-0 px-2 sm:px-0 overflow-hidden">
      {descriptions.map((text, i) => (
        <p
          key={i}
          className={`
            absolute left-0 right-0
            transition-all duration-700 ease-in-out
            text-center md:text-left
            text-sm sm:text-sm md:text-base
            text-muted-foreground font-semibold leading-relaxed
            ${
              index === i
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          {text}
        </p>
      ))}
    </div>
  );
}