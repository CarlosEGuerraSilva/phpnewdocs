import {
  ComponentSizes,
  ThemeColors,
  WithDisabledState,
  WithWidgetOptions,
} from "@/types/variants";
import {
  INPUT_COLOR_CLASSES,
  INPUT_VARIANT_CLASSES,
} from "@/consts/input-base";
import { forwardRef, useState } from "react";
import { cn } from "@/utils/cn";
import { CheckmarkIcon } from "./icons/checkmark-icon";

interface CheckboxProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "color" | "size" | "label"
    >,
    WithWidgetOptions,
    WithDisabledState {
  label?: string;
}

const CHECKBOX_BOX_BASE_CLASSES =
  "relative inline-flex items-center justify-center p-1";

const CHECKBOX_BASE_CLASSES = "inline-flex items-center cursor-pointer";

const CHECKBOX_SIZE_CLASSES: Record<
  ComponentSizes,
  { box: string; icon: number; label: string }
> = {
  xs: { box: "w-3 h-3 rounded-sm", icon: 12, label: "text-xs" },
  sm: { box: "w-4 h-4 rounded", icon: 14, label: "text-sm" },
  md: { box: "w-5 h-5 rounded-md", icon: 16, label: "text-base" },
  lg: { box: "w-6 h-6 rounded-lg", icon: 18, label: "text-lg" },
  xl: { box: "w-7 h-7 rounded-xl", icon: 20, label: "text-xl" },
};

const CHECKBOX_LABEL_CLASSES: Record<ThemeColors, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  default: "text-default",
  danger: "text-danger",
  success: "text-success",
  warning: "text-warning",
  surface: "text-on-surface",
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      checked,
      onChange,
      id,
      size = "md",
      color = "primary",
      variant = "solid",
      className,
      ...rest
    }: CheckboxProps,
    forwardedRef
  ) => {
    const [isChecked, setIsChecked] = useState(checked || false);

    const inputId = id ? id : Math.random().toString(36).substring(2, 15);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className={cn(CHECKBOX_BASE_CLASSES, className)}>
        <div
          className={cn(
            CHECKBOX_BOX_BASE_CLASSES,
            CHECKBOX_SIZE_CLASSES[size].box,
            INPUT_COLOR_CLASSES[color],
            INPUT_VARIANT_CLASSES[variant]
          )}
        >
          <input
            className="absolute w-full h-full opacity-0 m-0 p-0 cursor-pointer"
            type="checkbox"
            ref={forwardedRef}
            checked={isChecked}
            onChange={handleChange}
            id={inputId}
            {...rest}
          />
          {isChecked && (
            <CheckmarkIcon className={CHECKBOX_SIZE_CLASSES[size].box} />
          )}
        </div>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "ml-2",
              CHECKBOX_LABEL_CLASSES[color],
              CHECKBOX_SIZE_CLASSES[size].label
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export default Checkbox;
