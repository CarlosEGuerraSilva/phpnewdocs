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

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color">,
    Partial<WithDualContent>,
    Partial<WithWidgetOptions> {
  variant?: ComponentVariants;
  size?: ComponentSizes;
  color?: ThemeColors;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isInvalid?: boolean;
}

export const INPUT_BASE_CLASSES = clsx(
  "w-full rounded-xl transition-colors duration-200",
  "focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  "placeholder:text-on-surface/50"
);

export const INPUT_SIZE_CLASSES: Record<ComponentSizes, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-5 py-3 text-lg",
  xl: "px-6 py-4 text-xl",
};

export const INPUT_COLOR_CLASSES: Record<ThemeColors, string> = {
  primary:
    "bg-primary-container/10 text-on-primary-container border-primary-container focus:border-primary",
  secondary:
    "bg-secondary-container/10 text-on-secondary-container border-secondary-container focus:border-secondary",
  tertiary:
    "bg-tertiary-container/10 text-on-tertiary-container border-tertiary-container focus:border-tertiary",
  default:
    "bg-surface-container text-on-surface border-surface-variant focus:border-on-surface",
  danger: "bg-danger/10 text-on-danger border-danger focus:border-danger",
  success: "bg-success/10 text-on-success border-success focus:border-success",
  warning: "bg-warning/10 text-on-warning border-warning focus:border-warning",
  surface:
    "bg-surface text-on-surface border-surface-variant focus:border-on-surface",
};

export const INPUT_VARIANT_CLASSES: Record<ComponentVariants, string> = {
  solid: "border-0",
  contained: "border-2",
  bordered: "bg-transparent border-2",
  light: "bg-transparent border-0 border-b-2 rounded-none",
  ghost: "bg-transparent border-0",
  shadow: "shadow-md focus:shadow-lg border-0",
};

export const INPUT_VARIANT_OVERRIDES: Record<
  Extract<ComponentVariants, "contained" | "light" | "bordered" | "ghost">,
  Partial<Record<ThemeColors, string>>
> = {
  contained: {
    default: "bg-surface-container",
  },
  light: {
    default: "focus:border-on-surface",
  },
  bordered: {
    default: "border-surface-variant focus:border-on-surface",
  },
  ghost: {
    default: "hover:bg-surface-container/50",
  },
};

const LABEL_SIZE_CLASSES: Record<ComponentSizes, string> = {
  xs: "text-xs mb-1",
  sm: "text-sm mb-1",
  md: "text-sm mb-1.5",
  lg: "text-base mb-2",
  xl: "text-lg mb-2",
};

const HELPER_TEXT_SIZE_CLASSES: Record<ComponentSizes, string> = {
  xs: "text-xs mt-1",
  sm: "text-xs mt-1",
  md: "text-sm mt-1.5",
  lg: "text-sm mt-2",
  xl: "text-base mt-2",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
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
      label,
      helperText,
      errorMessage,
      isInvalid = false,
      className: customClassName,
      id,
      ...props
    },
    forwardedRef
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const finalColor = isInvalid ? "danger" : color;

    const inputClassName = cn(
      INPUT_BASE_CLASSES,
      fullWidth && "w-full",
      INPUT_SIZE_CLASSES[size],
      INPUT_COLOR_CLASSES[finalColor],
      INPUT_VARIANT_CLASSES[variant],
      variant in INPUT_VARIANT_OVERRIDES
        ? INPUT_VARIANT_OVERRIDES[
            variant as keyof typeof INPUT_VARIANT_OVERRIDES
          ][finalColor]
        : "",
      (startContent || endContent) && "flex items-center",
      startContent && "ps-10",
      endContent && "pe-10",
      customClassName
    );

    const wrapperClassName = cn(
      "relative",
      fullWidth ? "w-full" : "inline-block"
    );

    const inputElement = (
      <input
        ref={forwardedRef}
        id={inputId}
        disabled={disabled || loading}
        aria-invalid={isInvalid}
        aria-describedby={
          errorMessage
            ? `${inputId}-error`
            : helperText
            ? `${inputId}-helper`
            : undefined
        }
        className={inputClassName}
        {...props}
      />
    );

    return (
      <div className={wrapperClassName}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "block font-medium text-on-surface",
              LABEL_SIZE_CLASSES[size],
              disabled && "opacity-50"
            )}
          >
            {label}
          </label>
        )}

        <div className="relative">
          {startContent && (
            <div
              className={cn(
                "absolute left-3 top-1/2 -translate-y-1/2",
                "flex items-center pointer-events-none",
                disabled && "opacity-50"
              )}
            >
              {startContent}
            </div>
          )}

          {loading ? (
            <div className={inputClassName}>
              <span className="text-on-surface/50">Loading...</span>
            </div>
          ) : (
            inputElement
          )}

          {endContent && (
            <div
              className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2",
                "flex items-center pointer-events-none",
                disabled && "opacity-50"
              )}
            >
              {endContent}
            </div>
          )}
        </div>

        {(errorMessage || helperText) && (
          <p
            id={errorMessage ? `${inputId}-error` : `${inputId}-helper`}
            className={cn(
              HELPER_TEXT_SIZE_CLASSES[size],
              isInvalid ? "text-danger" : "text-on-surface/70"
            )}
            role={isInvalid ? "alert" : undefined}
          >
            {errorMessage || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
