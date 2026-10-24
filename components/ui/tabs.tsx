"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Tabs as TabsPrimitive } from "radix-ui"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "clay-inset group/tabs-list inline-flex w-fit items-center justify-center rounded-full p-1.5 text-gray-400 bg-[#0a0a0f] border border-white/5 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.8),inset_-1.5px_-1.5px_3px_rgba(255,255,255,0.05)]",
  {
    variants: {
      variant: {
        default: "",
        line: "gap-1 bg-transparent shadow-none border-none p-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex min-h-[38px] items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-bold font-display uppercase tracking-wider whitespace-nowrap text-gray-400 transition-[background-color,color,box-shadow,transform] duration-200 ease-[var(--ease-out)] active:scale-[0.97] cursor-pointer select-none",
        "hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
        "data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#7c3aed] data-[state=active]:to-[#a855f7] data-[state=active]:text-white data-[state=active]:shadow-[0_8px_18px_-2px_rgba(124,58,237,0.55),inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2.5px_-2.5px_5px_rgba(40,5,80,0.7)] data-[state=active]:scale-[1.02]",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none animate-in fade-in-0 duration-200 ease-[var(--ease-out)]", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
