import React, { ReactNode } from "react";
import { cn } from "@/utils/helpers";

type HeadingVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  as?: HeadingVariants;
  children: ReactNode;
}

export const Heading = ({
  as = "h2",
  children,
  className,
  ...rest
}: HeadingProps) => {
  const headings: Record<HeadingVariants, React.JSX.Element> = {
    h1: (
      <h1
        {...rest}
        className={cn(
          "text-primary font-semibold text-5xl leading-[48px]",
          className,
        )}
      >
        {children}
      </h1>
    ),
    h2: (
      <h2
        {...rest}
        className={cn(
          "text-primary font-semibold text-5xl leading-[48px]",
          className,
        )}
      >
        {children}
      </h2>
    ),
    h3: (
      <h3
        {...rest}
        className={cn(
          "text-primary font-semibold text-5xl leading-[48px]",
          className,
        )}
      >
        {children}
      </h3>
    ),
    h4: (
      <h4
        {...rest}
        className={cn(
          "text-primary font-semibold text-5xl leading-[48px]",
          className,
        )}
      >
        {children}
      </h4>
    ),
    h5: (
      <h5
        {...rest}
        className={cn(
          "text-primary font-semibold text-5xl leading-[48px]",
          className,
        )}
      >
        {children}
      </h5>
    ),
    h6: (
      <h6
        {...rest}
        className={cn(
          "text-primary font-semibold text-5xl leading-[48px]",
          className,
        )}
      >
        {children}
      </h6>
    ),
  };

  return headings[as];
};
