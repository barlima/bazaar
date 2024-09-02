"use client";

import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export const MoveUp: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      {children}
    </motion.div>
  );
};
