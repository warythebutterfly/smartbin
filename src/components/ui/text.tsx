import React, { ReactNode } from "react";
import { cn } from "@/utils/helpers";

interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
}

export const Text = ({ children, className, ...rest }: TextProps) => {
  return (
    <p {...rest} className={cn("font-normal leading-6", className)}>
      {children}
    </p>
  );
};
