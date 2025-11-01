import {
  ComponentSizes,
  ComponentVariants,
  ThemeColors,
  WithDualContent,
  WithWidgetOptions,
} from "@/types/variants";
import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import {
  INPUT_BASE_CLASSES,
  INPUT_COLOR_CLASSES,
  INPUT_SIZE_CLASSES,
  INPUT_VARIANT_CLASSES,
  INPUT_VARIANT_OVERRIDES,
} from "@/consts/input-base";

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size" | "color">,
    Partial<WithDualContent>,
    Partial<WithWidgetOptions> {
  variant?: ComponentVariants;
  size?: ComponentSizes;
  color?: ThemeColors;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  options?: Array<{
    value: string | number;
    label: string;
    disabled?: boolean;
  }>;
}

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

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = "bordered",
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
      options,
      className: customClassName,
      id,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const finalColor = isInvalid ? "danger" : color;

    const selectClassName = cn(
      INPUT_BASE_CLASSES,
      "appearance-none cursor-pointer",
      fullWidth && "w-full",
      INPUT_SIZE_CLASSES[size],
      INPUT_COLOR_CLASSES[finalColor],
      INPUT_VARIANT_CLASSES[variant],
      variant in INPUT_VARIANT_OVERRIDES
        ? INPUT_VARIANT_OVERRIDES[
            variant as keyof typeof INPUT_VARIANT_OVERRIDES
          ][finalColor]
        : "",
      startContent && "ps-10",
      "pe-10",
      customClassName
    );

    const wrapperClassName = cn(
      "relative",
      fullWidth ? "w-full" : "inline-block"
    );

    const selectElement = (
      <select
        ref={forwardedRef}
        id={selectId}
        disabled={disabled || loading}
        aria-invalid={isInvalid}
        aria-describedby={
          errorMessage
            ? `${selectId}-error`
            : helperText
            ? `${selectId}-helper`
            : undefined
        }
        className={selectClassName}
        {...props}
      >
        {options
          ? options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))
          : children}
      </select>
    );

    return (
      <div className={wrapperClassName}>
        {label && (
          <label
            htmlFor={selectId}
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
                "flex items-center pointer-events-none z-10",
                disabled && "opacity-50"
              )}
            >
              {startContent}
            </div>
          )}

          {loading ? (
            <div className={selectClassName}>
              <span className="text-on-surface/50">Loading...</span>
            </div>
          ) : (
            selectElement
          )}

          <div
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2",
              "flex items-center pointer-events-none",
              disabled && "opacity-50"
            )}
          >
            {endContent || <ChevronDownIcon />}
          </div>
        </div>

        {(errorMessage || helperText) && (
          <p
            id={errorMessage ? `${selectId}-error` : `${selectId}-helper`}
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

Select.displayName = "Select";

export default Select;
