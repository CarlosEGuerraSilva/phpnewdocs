import {
  ThemeColors,
  ComponentSizes,
  ComponentVariants,
  WithDualContent,
  TextAlignment,
  WithWidgetOptions,
} from "@/types/variants";
import { cn } from "@/utils/cn";
import clsx from "clsx";
import { forwardRef } from "react";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    WithDualContent,
    WithWidgetOptions,
    Pick<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      "href" | "target" | "rel"
    > {
  text?: React.ReactNode | React.ReactNode[] | string;
}

const BUTTON_BASE_CLASSES = clsx(
  "group relative inline-flex items-center justify-center",
  "cursor-pointer text-md rounded-xl transition-colors duration-200",
  "transition-transform base-transition focus:outline-none disabled:opacity-50",
  "disabled:pointer-events-none overflow-hidden active:scale-95 select-none"
);

const TEXT_ALIGNMENT_CLASSES: Record<TextAlignment, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  inherit: "text-inherit",
};

const SIZE_CLASSES: Record<ComponentSizes, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-5 py-3 text-lg",
  xl: "px-6 py-4 text-xl",
};

const COLOR_CLASSES: Record<ThemeColors, string> = {
  primary:
    "bg-primary-container text-on-primary-container border-primary-container shadow-primary/10",
  secondary:
    "bg-secondary-container text-on-secondary-container border-secondary-container shadow-secondary/10",
  tertiary:
    "bg-tertiary-container text-on-tertiary-container border-tertiary-container shadow-tertiary/10",
  default: "bg-default text-on-default border-default shadow-default/10",
  danger: "bg-danger text-on-danger border-danger shadow-danger/10",
  success: "bg-success text-on-success border-success shadow-success/10",
  warning: "bg-warning text-on-warning border-warning shadow-warning/10",
  surface:
    "bg-surface text-on-surface border-surface shadow-surface/10 border-on-surface-container shadow-surface/10",
};

const VARIANT_CLASSES: Record<ComponentVariants, string> = {
  solid: "",
  contained: "bg-surface-container border-2 border-surface-variant",
  bordered: "bg-transparent border-2",
  light: "bg-transparent",
  ghost: "not-hover:bg-transparent border-2",
  shadow: "shadow-md hover:shadow-lg",
};

const VARIANT_OVERRIDES: Record<
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
    surface: "hover:border-surface",
  },
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "solid",
      size = "md",
      color = "default",
      startContent,
      endContent,
      fullWidth = false,
      disabled = false,
      loading = false,
      text,
      textAlign = "center",
      href,
      target,
      rel,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const { className: customClassName, ...restProps } = props;

    const className = cn(
      BUTTON_BASE_CLASSES,
      fullWidth && "w-full",
      SIZE_CLASSES[size],
      TEXT_ALIGNMENT_CLASSES[textAlign],
      COLOR_CLASSES[color],
      VARIANT_CLASSES[variant],
      variant in VARIANT_OVERRIDES
        ? VARIANT_OVERRIDES[variant as keyof typeof VARIANT_OVERRIDES][color]
        : "",
      customClassName
    );

    const content = (
      <>
        <div
          aria-hidden="true"
          data-test-id="state-layer"
          className={cn(
            "z-0 absolute inset-0 group-hover:bg-surface-tint/10 group-active:group-hover:bg-surface-tint/20 transition-colors pointer-events-none",
            variant === "ghost" ? "opacity-0 active:opacity-100" : ""
          )}
          role="presentation"
        ></div>
        {startContent && <span className="me-2">{startContent}</span>}
        <div className={cn("flex-1", TEXT_ALIGNMENT_CLASSES[textAlign])}>
          {loading ? "Loading..." : text || children}
        </div>
        {endContent && <span className="ms-2">{endContent}</span>}
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          aria-disabled={disabled}
          className={className}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={forwardedRef}
        disabled={disabled || loading}
        className={className}
        {...restProps}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
