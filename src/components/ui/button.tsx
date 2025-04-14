import React, { ReactNode } from "react";
import { Spinner } from "./spinner";
import { cn } from "@/utils/helpers";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  full?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  leftIcon?: ReactNode;
}

export const Button = ({
  children,
  variant = "primary",
  leftIcon,
  className,
  isLoading,
  disabled,
  full,
  ...rest
}: ButtonProps) => {
  const contentWithIcon = (
    <p className="flex flex-1 items-center">
      <span className="inline-block mr-4">{leftIcon}</span>
      {children}
    </p>
  );
  const contentWithoutIcon = isLoading ? <Spinner /> : children;

  if (variant === "primary") {
    return (
      <button
        className={cn(
          `w-full h-10 px-6 rounded-full bg-primary text-white text-sm flex items-center justify-center font-normal cursor-pointer ${
            disabled ? "disabled:opacity-50" : null
          }`,
          className,
        )}
        {...rest}
        disabled={disabled}
      >
        {!leftIcon ? contentWithoutIcon : contentWithIcon}
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        className={cn(
          `w-full h-10 px-6 rounded-full bg-secondary text-white text-sm flex items-center justify-center font-normal cursor-pointer ${
            disabled ? "disabled:opacity-50" : null
          }`,
          className,
        )}
        {...rest}
        disabled={disabled}
      >
        {!leftIcon ? contentWithoutIcon : contentWithIcon}
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        className={cn(
          "w-full h-10 px-6 rounded-full border border-primary flex items-center justify-center text-primary font-normal text-sm leading-6 cursor-pointer",
          className,
        )}
        {...rest}
      >
        {!leftIcon ? contentWithoutIcon : contentWithIcon}
      </button>
    );
  }

  if (variant === "ghost") {
    return (
      <button
        className={cn(
          "w-full h-10 px-6 rounded-full flex items-center justify-center text-sm font-normal cursor-pointer",
          "",
        )}
        {...rest}
      >
        {!leftIcon ? contentWithoutIcon : contentWithIcon}
      </button>
    );
  }

  return (
    <button className={className} {...rest}>
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
