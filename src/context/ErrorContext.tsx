"use client";

import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { FaXmark } from "react-icons/fa6";

import { Card } from "@/components/atoms/Card";
import { Button } from "@/components/molecules/Button";

type ErrorContextType = {
  error: string | null;
  setError: (error: string | null) => void;
};

const ErrorContext = createContext<ErrorContextType>({
  error: null,
  setError: () => {},
});

export const ErrorContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null);

  const value = useMemo(() => ({ error, setError }), [error]);

  return (
    <ErrorContext.Provider value={value}>
      {error && (
        <Card
          className="mb-8 flex justify-between bg-rose-400 text-white rounded-none"
          interactive={false}
        >
          {error}
          <Button color="danger" onClick={() => setError(null)}>
            <FaXmark />
          </Button>
        </Card>
      )}
      {children}
    </ErrorContext.Provider>
  );
};

export const useErrorContext = () => useContext(ErrorContext);
