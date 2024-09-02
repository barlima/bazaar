"use client";

import React, { PropsWithChildren } from "react";
import { PageTransition } from "@/layout/animations/PageTransition";

const Template: React.FC<PropsWithChildren> = ({ children }) => {
  return <PageTransition>{children}</PageTransition>;
};

export default Template;
