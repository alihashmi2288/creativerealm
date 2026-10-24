"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShinyTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  disabled?: boolean;
  speed?: string;
  className?: string;
  variant?: "dark" | "light";
}

export default function ShinyText({
  children,
  disabled = false,
  speed = "4s",
  className = "",
  variant = "dark",
  ...props
}: ShinyTextProps) {
  const gradient = variant === "light"
    ? "linear-gradient(120deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.4) 100%)"
    : "linear-gradient(120deg, rgba(23, 23, 28, 0.6) 0%, rgba(255, 119, 89, 1) 50%, rgba(23, 23, 28, 0.6) 100%)";

  return (
    <span
      className={cn(
        "inline-flex items-center bg-clip-text text-transparent font-medium",
        disabled ? "" : "animate-shine",
        className
      )}
      style={{
        backgroundImage: gradient,
        backgroundSize: "200% 100%",
        animationDuration: speed,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
