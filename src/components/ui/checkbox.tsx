"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // comportamento (mantém)
        "peer relative flex size-5 shrink-0 items-center justify-center outline-none transition-shadow",
        "group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:ring-[3px] aria-invalid:ring-destructive/20",
        // frosted glass (substitui border/rounded/focus/checked antigos)
        "border-none rounded-[7px] bg-white/55 backdrop-blur-md",
        "shadow-[0_1px_2px_rgba(255,255,255,.7)_inset,0_4px_10px_-4px_rgba(21,24,34,.3)]",
        "focus-visible:shadow-[0_1px_2px_rgba(255,255,255,.9)_inset,0_0_0_2px_rgba(255,255,255,.8),0_6px_14px_-6px_rgba(21,24,34,.4)]",
        // estado marcado (glass do accent)
        "data-[state=checked]:bg-primary/85 data-[state=checked]:text-primary-foreground",
        "data-[state=checked]:shadow-[0_1px_2px_rgba(255,255,255,.5)_inset,0_4px_12px_-4px_var(--primary)]",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
