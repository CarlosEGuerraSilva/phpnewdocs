import { ComponentSizes, ComponentVariants, ThemeColors } from "@/types/variants";
import clsx from "clsx";

const INPUT_BASE_CLASSES = clsx(
	"w-full rounded-xl transition-colors duration-200",
	"focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
	"placeholder:text-on-surface/50"
);

const INPUT_SIZE_CLASSES: Record<ComponentSizes, string> = {
	xs: "px-2 py-1 text-xs",
	sm: "px-3 py-1.5 text-sm",
	md: "px-4 py-2",
	lg: "px-5 py-3 text-lg",
	xl: "px-6 py-4 text-xl",
};

const INPUT_COLOR_CLASSES: Record<ThemeColors, string> = {
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

const INPUT_VARIANT_CLASSES: Record<ComponentVariants, string> = {
	solid: "border-0",
	contained: "border-2",
	bordered: "bg-transparent border-2",
	light: "bg-transparent border-0 border-b-2 rounded-none",
	ghost: "bg-transparent border-0",
	shadow: "shadow-md focus:shadow-lg border-0",
};

const INPUT_VARIANT_OVERRIDES: Record<
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

export {
	INPUT_BASE_CLASSES,
	INPUT_COLOR_CLASSES,
	INPUT_SIZE_CLASSES,
	INPUT_VARIANT_CLASSES,
	INPUT_VARIANT_OVERRIDES,
	LABEL_SIZE_CLASSES,
	HELPER_TEXT_SIZE_CLASSES
};