
import React from "react";

type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return <h2>{children}</h2>;
};

// type TextProps = {
//   children: string;
// };

// export const Text = ({ children }: TextProps) => {
//   return <p>{children}</p>;
// };

type TextProps = {
  children: React.ReactNode;  // Accept React elements, not just string
};

export const Text = ({ children }: TextProps) => {
  return <p>{children}</p>;
};

type TypographyProps = {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "p" | "span";  // extend as needed
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({ children, variant = "p", className }) => {
  switch (variant) {
    case "h1":
      return <h1 className={className}>{children}</h1>;
    case "h2":
      return <h2 className={className}>{children}</h2>;
    case "h3":
      return <h3 className={className}>{children}</h3>;
    case "span":
      return <span className={className}>{children}</span>;
    default:
      return <p className={className}>{children}</p>;
  }
};

export default Typography;