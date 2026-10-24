import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full font-medium font-sans uppercase tracking-wider text-xs whitespace-nowrap transition-colors [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "bg-[#17171c] text-white border border-[#17171c]",
        secondary:
          "bg-[#eeece7] text-[#212121] border border-[#d9d9dd]",
        destructive:
          "bg-[#fff0f0] text-[#b30000] border border-[#f5c2c2]",
        outline:
          "border border-[#d9d9dd] text-[#212121] bg-white",
        ghost: "hover:bg-[#f2f2f2] text-[#212121]",
        link: "text-[#1863dc] underline-offset-4 hover:underline",
        violet:
          "bg-[#17171c] text-white border border-[#17171c]",
        peach:
          "bg-[#fff1ee] text-[#ff7759] border border-[#ffad9b]",
        emerald:
          "bg-[#edfce9] text-[#003c33] border border-[#c3eec0]",
        coral:
          "bg-[#ff7759] text-white border border-[#ff7759]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
