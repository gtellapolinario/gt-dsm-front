import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const base = "inline-flex items-center justify-center rounded-md font-semibold text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow",
    outline: "border border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white",
    ghost: "hover:bg-slate-800 hover:text-slate-100",
    link: "text-blue-500 underline-offset-4 hover:underline",
  };
  const sizes = {
    default: "h-9 px-4 py-2",
    sm: "h-7 rounded px-3 text-[11px]",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
