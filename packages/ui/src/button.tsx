"use client";

import { ReactNode, useEffect} from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API);
    fetch(`${process.env.NEXT_PUBLIC_API}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
