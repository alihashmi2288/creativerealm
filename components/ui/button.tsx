import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-medium font-sans whitespace-nowrap transition-[color,background-color,border-color,opacity,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-[#17171c] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer user-select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "btn-primary",
        secondary:
          "btn-secondary",
        white:
          "btn-white-pill",
        destructive:
          "bg-[#b30000] text-white hover:bg-[#900000]",
        outline:
          "btn-pill-outline",
        ghost:
          "text-[#212121] hover:bg-[#f2f2f2] rounded-full",
        link: "text-[#1863dc] underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-[44px] px-6 py-2.5",
        xs: "min-h-[32px] gap-1 px-3 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "min-h-[38px] gap-1.5 px-4 text-xs",
        lg: "min-h-[48px] px-8 text-sm",
        icon: "size-10 min-h-[40px] min-w-[40px] rounded-full p-0",
        "icon-xs": "size-7 rounded-full p-0 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-full p-0",
        "icon-lg": "size-11 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
