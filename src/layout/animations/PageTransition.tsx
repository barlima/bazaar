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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className={twMerge("flex flex-1", className)}
    >
      {children}
    </motion.div>
  );
};
