"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  stepDuration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export default function BlurText({
  text = "",
  delay = 70,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  stepDuration = 0.32,
  as: Tag = "span",
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, prefersReducedMotion, mounted]);

  const fromSnapshot =
    direction === "top"
      ? { filter: "blur(10px)", opacity: 0, y: -24 }
      : { filter: "blur(10px)", opacity: 0, y: 24 };

  const toSnapshot = {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
  };

  const shouldAnimate = mounted && !prefersReducedMotion;

  return (
    <Tag ref={ref as any} className={cn("inline-flex flex-wrap", className)}>
      {elements.map((element, index) => (
        <motion.span
          key={`${element}-${index}`}
          initial={shouldAnimate ? fromSnapshot : toSnapshot}
          animate={shouldAnimate && inView ? toSnapshot : (shouldAnimate ? fromSnapshot : toSnapshot)}
          transition={{
            duration: stepDuration,
            delay: (index * delay) / 1000,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="inline-block will-change-[filter,opacity,transform]"
        >
          {element === " " ? "\u00A0" : element}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </Tag>
  );
}
