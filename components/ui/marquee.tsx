import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  duration = "35s",
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1.25rem] [gap:var(--gap)] select-none",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
          "marquee-pause": pauseOnHover,
        },
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)]",
            {
              "animate-marquee flex-row": !vertical && !reverse,
              "animate-marquee-reverse flex-row": !vertical && reverse,
              "animate-marquee-vertical flex-col": vertical && !reverse,
              "animate-marquee-vertical-reverse flex-col": vertical && reverse,
            }
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export default Marquee;
