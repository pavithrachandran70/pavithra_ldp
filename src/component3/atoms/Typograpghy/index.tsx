
import React from "react";

type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return <h2>{children}</h2>;
};

type TextProps = {
  children: string;
};

export const Text = ({ children }: TextProps) => {
  return <p>{children}</p>;
};
