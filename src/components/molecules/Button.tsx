import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  color?: "default" | "danger";
  variant?: "primary" | "outlined";
};

export const Button: React.FCS<ButtonProps> = ({
  className,
  children,
  color,
  variant,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        clsx(
          "flex items-center justify-center rounded-xl border border-transparent bg-orange-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600",
          "hover:bg-orange-300 transition-colors duration-300",
          color === "danger" &&
            "bg-red-600 hover:bg-red-700 focus-visible:outline-red-600 hover:text-white",
          variant === "outlined" &&
            "bg-white text-orange-400 hover:bg-orange-400 border-orange-400",
          color === "danger" &&
            variant === "outlined" &&
            "border-red-600 text-red-600 hover:bg-red-600",
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
};
