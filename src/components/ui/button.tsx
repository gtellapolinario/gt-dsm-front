import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // base: sem borda, transição de sombra, "afunda" no active
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border-none text-sm font-medium whitespace-nowrap transition-all outline-none select-none active:not-aria-[haspopup]:translate-y-px active:not-aria-[haspopup]:shadow-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // ação principal: sólida com highlight de topo + sombra colorida
        default:
          "bg-primary text-primary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_6px_16px_-6px_var(--primary)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_10px_22px_-8px_var(--primary)]",
        // frosted glass — igual aos inputs
        outline:
          "bg-white/55 backdrop-blur-md text-foreground shadow-[0_1px_2px_rgba(255,255,255,.7)_inset,0_6px_16px_-8px_rgba(21,24,34,.3)] hover:bg-white/70 hover:shadow-[0_1px_2px_rgba(255,255,255,.9)_inset,0_8px_20px_-8px_rgba(21,24,34,.4)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,.4),0_4px_12px_-6px_rgba(21,24,34,.25)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.4),0_8px_18px_-8px_rgba(21,24,34,.3)]",
        // leve, ganha vidro só no hover
        ghost:
          "text-foreground shadow-none hover:bg-white/50 hover:backdrop-blur-md hover:shadow-[0_1px_2px_rgba(255,255,255,.7)_inset,0_6px_16px_-8px_rgba(21,24,34,.25)]",
        destructive:
          "bg-destructive/10 text-destructive shadow-[0_1px_2px_rgba(255,255,255,.5)_inset,0_4px_12px_-6px_var(--destructive)] hover:bg-destructive/20 hover:shadow-[0_1px_2px_rgba(255,255,255,.5)_inset,0_8px_18px_-8px_var(--destructive)] focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
        green:
          "bg-btgreen/10 text-btgreen shadow-[0_1px_2px_rgba(255,255,255,.5)_inset,0_4px_12px_-6px_var(--btgreen)] hover:bg-btgreen/20 hover:shadow-[0_1px_2px_rgba(255,255,255,.5)_inset,0_8px_18px_-8px_var(--btgreen)] focus-visible:ring-btgreen/20",
      },
      size: {
        default:
          "h-9 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-10 gap-1.5 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
