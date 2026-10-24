"use client";

import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(23, 23, 28, 0.04)",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-[16px] bg-white border border-[#e5e7eb] p-7 transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out)] group hover:border-[#d9d9dd] hover:shadow-sm",
        className
      )}
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
      } as React.CSSProperties}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Overlay */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-px transition-opacity duration-250 ease-[var(--ease-out)]",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), ${spotlightColor}, transparent 50%)`,
        }}
        aria-hidden="true"
      />

      {/* Card Content Surface */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
