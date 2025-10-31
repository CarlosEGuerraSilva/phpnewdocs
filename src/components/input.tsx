import {
  ComponentSizes,
  ComponentVariants,
  ThemeColors,
  WithDualContent,
  WithWidgetOptions,
} from "@/types/variants";
import { cn } from "@/utils/cn";
import {
  INPUT_BASE_CLASSES,
  INPUT_COLOR_CLASSES,
  INPUT_SIZE_CLASSES,
  INPUT_VARIANT_CLASSES,
  INPUT_VARIANT_OVERRIDES,
  LABEL_SIZE_CLASSES,
  HELPER_TEXT_SIZE_CLASSES,
} from "@/consts/input-base";
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
