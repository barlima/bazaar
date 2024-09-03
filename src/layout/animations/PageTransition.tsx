"use client";

import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const PageTransition: React.FCS<PropsWithChildren> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(-10px)" }}
      animate={{
        opacity: 1,
        transform: "translateY(0)",
        transition: { duration: 1 },
      }}
      className={twMerge("flex flex-1", className)}
    >
      {children}
    </motion.div>
  );
};
