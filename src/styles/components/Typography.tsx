import React from "react";

interface IBaseTitleProps {
  children: React.ReactNode;
  className?: string;
  fontWeight: 300 | 500 | 900;
  fontSize: "sm" | "md" | "lg";
}

const BaseTitle = ({ children, className }: IBaseTitleProps) => {
  return (
    <>
      {<span className={className}>{children}</span>}
    </>
  );
};

export default BaseTitle;
