import clsx from "clsx";
import React from "react";

type ButtonProps = {
  variant?: "primary" | "accent" | "ghost";
  children: React.ReactNode;
  className?: string;
};

const variants: Record<string, string> = {
  primary: "bg-primary text-white ",
  accent: "bg-secondary text-primary ",
  ghost: "bg-transparent text-primary hover:bg-transparent/10 ",
};

export const Button = ({
  variant = "primary",
  children,
  className,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "px-5 py-2 h-12 w-48 flex items-center rounded-lg",
        variants[variant],
        "hover:bg-primary/80 transition-all cursor-pointer hover:scale-101 active:scale-98 active:brightness-80 duration-300)",
        className,
      )}
    >
      {children}
    </button>
  );
};
