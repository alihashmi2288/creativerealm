"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "clay-card rounded-2xl mb-4 p-5 sm:p-6 bg-[#151520] border border-white/10 shadow-[0_12px_24px_-6px_rgba(0,0,0,0.65),inset_2px_2px_4px_rgba(255,255,255,0.12),inset_-2.5px_-2.5px_5px_rgba(0,0,0,0.65)] hover:border-violet-primary/35 transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out)]",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4 text-left font-bold font-display uppercase tracking-tight text-white text-base sm:text-lg transition-[color,opacity] duration-150 ease-[var(--ease-out)] outline-none focus-visible:ring-2 focus-visible:ring-violet-primary focus-visible:ring-offset-2 rounded-xl cursor-pointer [&[data-state=open]>div>svg]:rotate-180",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <div className="size-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-violet-primary shadow-[0_4px_8px_rgba(0,0,0,0.4),inset_1px_1px_2px_rgba(255,255,255,0.2)] flex-shrink-0">
          <ChevronDownIcon className="pointer-events-none size-4 transition-transform duration-200 ease-[var(--ease-out)]" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pt-4 pb-1 text-gray-300 font-display leading-relaxed", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
