import clsx from "clsx";
import React, { PropsWithChildren } from "react";

type PillProps = {
  active?: boolean;
  className?: string;
};

export const Pill: React.FC<PropsWithChildren<PillProps>> = ({
  active,
  className,
  children,
}) => {
  const classes = clsx(
    "rounded-full px-4 py-1 border-rose-400 border-2",
    !active && "hover:bg-rose-100 transition-colors duration-300",
    active &&
      "bg-gradient-to-r border-none px-[calc(1rem+2px)] py-[calc(0.25rem+2px)] rose-gradient text-white",
    className
  );

  return <div className={classes}>{children}</div>;
};
