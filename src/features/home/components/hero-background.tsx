"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
] as const;

const SLIDE_INTERVAL_MS = 5000;

export function HeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-x-0 top-0 h-[903px] overflow-hidden" aria-hidden>
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((src, index) => (
          <div key={src} className="relative h-full min-w-full shrink-0">
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              className="object-cover opacity-60"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-background-base/10" />
    </div>
  );
}
