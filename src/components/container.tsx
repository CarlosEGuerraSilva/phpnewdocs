import { forwardRef, type ComponentRef } from "react";
import { cn } from "@/utils/cn";

type ContainerElement = ComponentRef<"div">;

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: keyof typeof ResponsiveMaxWidth;
  align?: "left" | "center" | "right";
  disableGutters?: boolean;
}

enum ResponsiveMaxWidth {
  sm,
  md,
  lg,
  xl,
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  full,
}

const MAX_WIDTH_CLASSES: Record<keyof typeof ResponsiveMaxWidth, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
} as const;

const ALIGN_CLASSES = {
  left: "mr-auto",
  center: "mx-auto",
  right: "ml-auto",
} as const;

const GUTTER_CLASSES = "px-4 sm:px-6 lg:px-8";

const Container = forwardRef<ContainerElement, ContainerProps>(
  (
    {
      children,
      className = "",
      maxWidth = "full",
      align = "center",
      disableGutters = false,
    },
    forwardedRef
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cn(
          "w-full",
          MAX_WIDTH_CLASSES[maxWidth],
          ALIGN_CLASSES[align],
          !disableGutters && GUTTER_CLASSES,
          className
        )}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

export { Container };
