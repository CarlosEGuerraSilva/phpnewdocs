import { ComponentSizes, WithWidgetOptions } from "@/types/variants";
import { cn } from "@/utils/cn";
import clsx from "clsx";
import { forwardRef } from "react";

type CardElevation = "lowest" | "low" | "normal" | "high" | "highest";

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    Omit<WithWidgetOptions, "loading" | "variant" | "color"> {
  elevation?: CardElevation;
  isPressable?: boolean;
  isHoverable?: boolean;
  disableAnimation?: boolean;
}

const CARD_BASE_CLASSES = clsx(
  "relative rounded-xl overflow-hidden text-on-surface",
  "transition-all duration-200"
);

const CARD_SIZE_CLASSES: Record<ComponentSizes, string> = {
  xs: "p-2",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
};

const CARD_ELEVATION_CLASSES: Record<CardElevation, string> = {
  lowest: "bg-surface-container-lowest",
  low: "bg-surface-container-low",
  normal: "bg-surface-container",
  high: "bg-surface-container-high",
  highest: "bg-surface-container-highest",
};

const CARD_ELEVATION_HOVER_CLASSES: Record<CardElevation, string> = {
  lowest: "hover:bg-surface-container-low",
  low: "hover:bg-surface-container",
  normal: "hover:bg-surface-container-high",
  high: "hover:bg-surface-container-highest",
  highest: "hover:bg-surface-container-highest",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      elevation = "normal",
      size = "md",
      fullWidth = false,
      disabled = false,
      isPressable = false,
      isHoverable = false,
      disableAnimation = false,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const { className: customClassName, ...restProps } = props;

    const className = cn(
      CARD_BASE_CLASSES,
      fullWidth && "w-full",
      CARD_SIZE_CLASSES[size],
      CARD_ELEVATION_CLASSES[elevation],
      isHoverable && !disabled && CARD_ELEVATION_HOVER_CLASSES[elevation],
      isPressable && !disabled && "cursor-pointer active:scale-[0.98]",
      isHoverable &&
        !disabled &&
        "hover:shadow-lg hover:scale-[1.02] hover:z-10",
      disabled && "opacity-50 pointer-events-none",
      disableAnimation && "transition-none",
      customClassName
    );

    return (
      <div ref={forwardedRef} className={className} {...restProps}>
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export default Card;
