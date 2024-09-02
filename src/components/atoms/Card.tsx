import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  interactive?: boolean;
};

export const Card: React.FCS<PropsWithChildren<CardProps>> = ({
  children,
  className,
  interactive = true,
}) => {
  const classes = clsx(
    "bg-white rounded-lg p-6 border-2 border-transparent border-solid shadow-lg shadow-grey-500",
    className,
    interactive &&
      "transition-colors transition-transform duration-300 will-change-transform hover:border-rose-400 lg:hover:-translate-y-1"
  );

  return <div className={twMerge(classes)}>{children}</div>;
};
