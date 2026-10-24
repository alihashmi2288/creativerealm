import React from "react";

export interface BrandLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "inverted" | "symbol" | "symbol-inverted" | "symbol-coral";
  className?: string;
  symbolClassName?: string;
  textClassName?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function BrandLogo({
  variant = "default",
  className = "",
  symbolClassName = "",
  textClassName = "",
  size = "md",
  ...props
}: BrandLogoProps) {
  const isSymbolOnly = variant === "symbol" || variant === "symbol-inverted" || variant === "symbol-coral";
  const isInverted = variant === "inverted" || variant === "symbol-inverted";
  const isCoralSymbol = variant === "symbol-coral";

  const symbolFill = isCoralSymbol
    ? "#ff7759"
    : isInverted
    ? "#ffffff"
    : "#17171c";

  const textColor = isInverted ? "text-white" : "text-[#17171c]";

  // Proportional sizing for optical hierarchy
  const sizeConfig = {
    sm: { symbol: "h-6 w-6", text: "text-sm sm:text-base tracking-tight" },
    md: { symbol: "h-8 w-8 sm:h-9 sm:w-9", text: "text-base sm:text-lg font-bold tracking-tight" },
    lg: { symbol: "h-10 w-10 sm:h-11 sm:w-11", text: "text-xl sm:text-2xl font-bold tracking-tight" },
    xl: { symbol: "h-12 w-12 sm:h-14 sm:w-14", text: "text-2xl sm:text-3xl font-bold tracking-tight" },
  }[size];

  const symbolSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      role="img"
      aria-label="Creative Realm Symbol"
      className={`shrink-0 ${symbolClassName || sizeConfig.symbol}`}
      fill="none"
    >
      <title>Creative Realm Symbol</title>
      <path
        fill={symbolFill}
        fillRule="evenodd"
        d="M 60 36 H 154 C 182.72 36 206 59.28 206 88 C 206 112.5 188.9 133.05 165.81 140 L 212 220 H 165.81 L 119.62 140 H 80 V 184 H 124 V 220 H 60 A 16 16 0 0 1 44 204 V 52 A 16 16 0 0 1 60 36 Z M 80 72 V 104 H 154 C 162.84 104 170 96.84 170 88 C 170 79.16 162.84 72 154 72 Z"
      />
    </svg>
  );

  if (isSymbolOnly) {
    return symbolSvg;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`} {...props}>
      {symbolSvg}
      <span className={`font-display uppercase select-none leading-none ${textColor} ${textClassName || sizeConfig.text}`}>
        CREATIVE <span className="text-[#ff7759]">REALM</span>
      </span>
    </div>
  );
}
