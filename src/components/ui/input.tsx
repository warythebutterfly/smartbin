import React, { Fragment, forwardRef } from "react";
import { cn } from "@/utils/helpers";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errorMsg?: string;
}

export const Input = forwardRef(
  ({ className, errorMsg, ...rest }: InputProps, ref: any) => (
    <Fragment>
      <input
        ref={ref}
        {...rest}
        className={cn(
          "block w-full border-0 bg-transparent px-2 py-4 border-b placeholder:text-[#4B5563] placeholder:leading-6 text-base focus:outline-none",
          className,
          errorMsg
            ? "border-red-500 focus:border-red-500 focus-visible:border-red-500"
            : "border-b-[#D1D5DB] focus:border-primary focus-visible:border-primary",
        )}
      />
      {errorMsg ? (
        <span className="mt-1 block text-xs text-red-600">{errorMsg}</span>
      ) : null}
    </Fragment>
  ),
);

Input.displayName = "Input";
