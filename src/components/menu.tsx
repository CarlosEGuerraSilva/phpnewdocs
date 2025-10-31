import {
  ComponentVariants,
  Positioning,
  TextAlignmentOptions,
  WithFullWidth,
  WithTextAlignment,
} from "@/types/variants";
import { forwardRef } from "react";
import { cn } from "@/utils/cn";

export interface MenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    WithTextAlignment,
    WithFullWidth {
  variant?: ComponentVariants;
  position?: keyof typeof Positioning;
}

const MENU_BASE_CLASSES =
  "absolute z-100 min-w-[8rem] rounded-lg bg-surface-container p-2 text-on-surface";

const TEXT_ALIGNMENT_CLASSES: Record<
  keyof typeof TextAlignmentOptions,
  string
> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  inherit: "text-inherit",
};

const MENU_POSITION_CLASSES: Record<keyof typeof Positioning, string> = {
  topStart: "bottom-full left-0 mb-2",
  topCenter: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
  topEnd: "bottom-full right-0 mb-2",
  Start: "top-1/2 left-0 transform -translate-y-1/2 ml-2",
  // Center should not be used for menus, fallbacks to bottomCenter
  Center: "top-full left-1/2 transform -translate-x-1/2 mt-2",
  End: "top-1/2 right-0 transform -translate-y-1/2 mr-2",
  bottomStart: "top-full left-0 mt-2",
  bottomCenter: "top-full left-1/2 transform -translate-x-1/2 mt-2",
  bottomEnd: "top-full right-0 mt-2",
};

const MENU_VARIANT_CLASSES: Record<ComponentVariants, string> = {
  solid: "",
  contained: "bg-surface-container-highest border-2 border-surface-variant",
  bordered: "border-2 border-surface-variant",
  light: "bg-surface/50",
  ghost: "border-2 border-surface-variant not-hover:bg-transparent",
  shadow: "shadow-md",
};

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      textAlign = "left",
      variant = "solid",
      position = "bottomCenter",
      fullWidth = false,
      children,
    },
    forwardedRef
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cn(
          MENU_BASE_CLASSES,
          fullWidth ? "w-full" : "",
          TEXT_ALIGNMENT_CLASSES[textAlign],
          MENU_POSITION_CLASSES[position],
          MENU_VARIANT_CLASSES[variant]
        )}
      >
        {children}
      </div>
    );
  }
);
Menu.displayName = "Menu";

export { Menu };
