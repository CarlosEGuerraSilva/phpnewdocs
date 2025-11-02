import {
  ComponentSizes,
  ComponentVariants,
  ThemeColors,
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

export interface TextAreaProps
  extends Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      "size" | "color"
    >,
    Partial<Omit<WithWidgetOptions, "startContent" | "endContent">> {
  variant?: ComponentVariants;
  size?: ComponentSizes;
  color?: ThemeColors;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  minRows?: number;
  maxRows?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      variant = "solid",
      size = "md",
      color = "default",
      fullWidth = true,
      disabled = false,
      loading = false,
      label,
      helperText,
      errorMessage,
      isInvalid = false,
      className: customClassName,
      id,
      rows = 3,
      minRows,
      maxRows,
      ...props
    },
    forwardedRef
  ) => {
    const textareaId =
      id || `textarea-${Math.random().toString(36).substring(2, 9)}`;
    const finalColor = isInvalid ? "danger" : color;
    const finalRows = minRows ? Math.max(rows, minRows) : rows;

    const textareaClassName = cn(
      INPUT_BASE_CLASSES,
      "resize-y",
      fullWidth && "w-full",
      INPUT_SIZE_CLASSES[size],
      INPUT_COLOR_CLASSES[finalColor],
      INPUT_VARIANT_CLASSES[variant],
      variant in INPUT_VARIANT_OVERRIDES
        ? INPUT_VARIANT_OVERRIDES[
            variant as keyof typeof INPUT_VARIANT_OVERRIDES
          ][finalColor]
        : "",
      customClassName
    );

    const wrapperClassName = cn(
      "relative",
      fullWidth ? "w-full" : "inline-block"
    );

    const textareaElement = (
      <textarea
        ref={forwardedRef}
        id={textareaId}
        disabled={disabled || loading}
        rows={finalRows}
        aria-invalid={isInvalid}
        aria-describedby={
          errorMessage
            ? `${textareaId}-error`
            : helperText
            ? `${textareaId}-helper`
            : undefined
        }
        className={textareaClassName}
        style={
          maxRows
            ? {
                maxHeight: `calc(${maxRows} * 1.5em + ${
                  size === "xs"
                    ? "0.5rem"
                    : size === "sm"
                    ? "0.75rem"
                    : size === "md"
                    ? "1rem"
                    : size === "lg"
                    ? "1.5rem"
                    : "2rem"
                })`,
              }
            : undefined
        }
        {...props}
      />
    );

    return (
      <div className={wrapperClassName}>
        {label && (
          <label
            htmlFor={textareaId}
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
          {loading ? (
            <div className={textareaClassName}>
              <span className="text-on-surface/50">Loading...</span>
            </div>
          ) : (
            textareaElement
          )}
        </div>

        {(errorMessage || helperText) && (
          <p
            id={errorMessage ? `${textareaId}-error` : `${textareaId}-helper`}
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

TextArea.displayName = "TextArea";

export default TextArea;
