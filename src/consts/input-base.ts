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
		"bg-surface text-on-surface border-surface shadow-surface/10 border-on-surface-container",
};

const INPUT_VARIANT_CLASSES: Record<ComponentVariants, string> = {
	solid: "",
	contained: "bg-surface-container border-2 border-surface-variant",
	bordered: "bg-transparent border-2",
	light: "bg-transparent",
	ghost: "bg-transparent border-2",
	shadow: "shadow-md focus:shadow-lg",
};

const INPUT_VARIANT_OVERRIDES: Record<
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
		primary: "focus:bg-primary-container/20 text-on-primary-container",
		secondary: "focus:bg-secondary-container/20 text-on-secondary-container",
		tertiary: "focus:bg-tertiary-container/20 text-on-tertiary-container",
		default: "focus:bg-default/20 text-default focus:text-on-background",
		danger: "focus:bg-danger/20 text-danger focus:text-on-danger",
		success: "focus:bg-success/20 text-success focus:text-on-success",
		warning: "focus:bg-warning/20 text-warning focus:text-on-background",
	},
	bordered: {
		default: "text-default border-default/60 hover:border-default active:border-default",
		warning: "text-warning",
		success: "text-success",
		danger: "text-danger",
	},
	ghost: {
		default: "text-default focus:text-on-default",
		warning: "text-warning focus:text-on-warning",
		success: "text-success focus:text-on-success",
		danger: "text-danger focus:text-on-danger",
		surface: "focus:border-surface",
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