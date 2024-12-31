import React, { ReactNode } from "react";
import { cn } from "@/utils/helpers";

interface LabelProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children: ReactNode;
}

export const Label = ({ children, ...rest }: LabelProps) => {
  return (
    <label
      {...rest}
      className={cn("text-[#4B5563] block leading-6 mb-4", rest.className)}
    >
      {children}
    </label>
  );
};

export default Label;
