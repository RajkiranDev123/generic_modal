// components/Button.tsx
import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  onClick,
  children,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-black/40 text-white p-2 rounded-md cursor-pointer text-sm hover:-translate-y-1 transition-transform ${className}`}
    >
      {children}
    </button>
  );
}
