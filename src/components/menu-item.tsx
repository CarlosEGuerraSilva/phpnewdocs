import {
  ComponentSizes,
  ComponentVariants,
  ThemeColors,
  WithDualContent,
  WithWidgetOptions,
} from "@/types/variants";
import { cn } from "@/utils/cn";
import clsx from "clsx";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

interface MenuItemProps
  extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "color">,
    WithDualContent,
    Omit<WithWidgetOptions, "loading"> {
  href?: string;
  target?: string;
  rel?: string;
}

const MENU_ITEM_BASE_CLASSES = clsx(
  "flex items-center rounded-md list-none cursor-pointer",
  "transition-colors duration-200 select-none"
);

const MENU_ITEM_SIZE_CLASSES: Record<ComponentSizes, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-5 py-3 text-lg",
  xl: "px-6 py-4 text-xl",
};

const MENU_ITEM_COLOR_CLASSES: Record<ThemeColors, string> = {
  primary: "bg-primary-container text-on-primary-container",
  secondary: "bg-secondary-container text-on-secondary-container",
  tertiary: "bg-tertiary-container text-on-tertiary-container",
  default: "bg-default text-on-default",
  danger: "bg-danger text-on-danger",
  success: "bg-success text-on-success",
  warning: "bg-warning text-on-warning",
  surface: "bg-surface text-on-surface",
};

const MENU_ITEM_VARIANT_CLASSES: Record<ComponentVariants, string> = {
  solid: "",
  contained: "bg-surface-container border-2 border-surface-variant",
  bordered: "bg-transparent border-2",
  light: "bg-transparent",
  ghost: "bg-transparent",
  shadow: "shadow-md hover:shadow-lg",
};

const MENU_ITEM_VARIANT_OVERRIDES: Record<
  Extract<ComponentVariants, "contained" | "light" | "bordered" | "ghost">,
  Partial<Record<ThemeColors, string>>
> = {
  contained: {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
    default: "text-default",
    danger: "text-danger",
    success: "text-success",
    warning: "text-warning",
  },
  light: {
    primary: "hover:bg-primary-container/20 text-on-primary-container",
    secondary: "hover:bg-secondary-container/20 text-on-secondary-container",
    tertiary: "hover:bg-tertiary-container/20 text-on-tertiary-container",
    default: "hover:bg-default/20 text-default hover:text-on-background",
    danger: "hover:bg-danger/20 text-danger hover:text-on-danger",
    success: "hover:bg-success/20 text-success hover:text-on-success",
    warning: "hover:bg-warning/20 text-warning hover:text-on-background",
  },
  bordered: {
    default: "text-default",
    warning: "text-warning",
    success: "text-success",
    danger: "text-danger",
  },
  ghost: {
    default: "text-default hover:text-on-default",
    warning: "text-warning hover:text-on-warning",
    success: "text-success hover:text-on-success",
    danger: "text-danger hover:text-on-danger",
    surface: "hover:bg-surface-container",
  },
};

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  (
    {
      variant = "light",
      size = "md",
      color = "default",
      startContent,
      endContent,
      disabled = false,
      href,
      target,
      rel,
      children,
      onClick,
      className: customClassName,
      ...props
    },
    forwardedRef
  ) => {
    const className = cn(
      MENU_ITEM_BASE_CLASSES,
      MENU_ITEM_SIZE_CLASSES[size],
      MENU_ITEM_COLOR_CLASSES[color],
      MENU_ITEM_VARIANT_CLASSES[variant],
      variant in MENU_ITEM_VARIANT_OVERRIDES
        ? MENU_ITEM_VARIANT_OVERRIDES[
            variant as keyof typeof MENU_ITEM_VARIANT_OVERRIDES
          ][color]
        : "",
      disabled && "opacity-50 pointer-events-none",
      customClassName
    );

    const content = (
      <>
        {startContent && <span className="me-2">{startContent}</span>}
        <span className="flex-1">{children}</span>
        {endContent && <span className="ms-2">{endContent}</span>}
      </>
    );

    const isExternal = href?.startsWith("http");
    const linkProps = isExternal
      ? {
          target: target || "_blank",
          rel: rel || "noopener noreferrer",
        }
      : { target, rel };

    return (
      <li ref={forwardedRef} className={disabled ? "opacity-50 pointer-events-none" : ""}>
        {href ? (
          isExternal ? (
            <a
              href={href}
              className={cn(className, "no-underline")}
              onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
              {...linkProps}
            >
              {content}
            </a>
          ) : (
            <Link
              to={href}
              className={cn(className, "no-underline")}
              onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
            >
              {content}
            </Link>
          )
        ) : (
          <div 
            className={className} 
            onClick={onClick as unknown as React.MouseEventHandler<HTMLDivElement>}
            {...(props as React.HTMLAttributes<HTMLDivElement>)}
          >
            {content}
          </div>
        )}
      </li>
    );
  }
);
MenuItem.displayName = "MenuItem";

export { MenuItem };
