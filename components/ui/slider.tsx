"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Slider as SliderPrimitive } from "radix-ui"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "clay-inset relative grow overflow-hidden rounded-full bg-[#0a0a0f] border border-white/5 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.8),inset_-1.5px_-1.5px_3px_rgba(255,255,255,0.05)] data-[orientation=horizontal]:h-3.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-3.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "absolute bg-gradient-to-r from-[#7c3aed] to-[#d0bcff] data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full shadow-[0_0_12px_rgba(167,139,250,0.5),inset_1.5px_1.5px_2px_rgba(255,255,255,0.4)] rounded-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="block size-7 shrink-0 rounded-full bg-gradient-to-br from-[#f5adff] via-[#d0bcff] to-[#7c3aed] border-2 border-white/40 shadow-[0_6px_14px_rgba(0,0,0,0.6),inset_2px_2px_4px_rgba(255,255,255,0.6),inset_-2.5px_-2.5px_5px_rgba(50,0,100,0.7)] transition-transform duration-150 hover:scale-115 active:scale-95 focus-visible:ring-4 focus-visible:ring-violet-primary/50 focus-visible:outline-none cursor-grab active:cursor-grabbing disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
