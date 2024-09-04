import React from "react";
import { FaVihara } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

type LogoProps = {
  size?: "sm" | "lg";
};

export const Logo: React.FCS<LogoProps> = ({ className, size = "sm" }) => {
  const sizes = {
    sm: 16,
    lg: 48,
  };

  // text-[16px] text-[48px]

  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      <FaVihara
        size={sizes[size] + 6}
        className="fill-rose-600 group-hover:fill-rose-800 transition-colors duration-300"
      />
      <span
        className={`text-rose-600 group-hover:text-rose-800 transition-colors duration-300 font-prata text-[${sizes[size]}px]`}
      >
        BAZAAR
      </span>
    </div>
  );
};
