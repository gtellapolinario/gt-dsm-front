import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // largura + comportamento (mantém do original)
        "h-11 w-full min-w-0 px-4 py-1 text-[15px] outline-none transition-shadow",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        "placeholder:text-muted-foreground",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:ring-[3px] aria-invalid:ring-destructive/20",
        // visual novo (substitui border/bg/rounded/focus-visible antigos)
        "border-none rounded-xl bg-white/55 backdrop-blur-md px-4 h-11 text-[15px] transition-shadow outline-none",
        "shadow-[0_1px_2px_rgba(255,255,255,.7)_inset,0_6px_16px_-8px_rgba(21,24,34,.3)]",
        "focus:shadow-[0_1px_2px_rgba(255,255,255,.9)_inset,0_0_0_2px_rgba(255,255,255,.8),0_8px_20px_-8px_rgba(21,24,34,.4)]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
