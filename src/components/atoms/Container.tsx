import React, { PropsWithChildren } from "react";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-6xl w-full mx-auto px-4 lg:px-6">{children}</div>;
};
