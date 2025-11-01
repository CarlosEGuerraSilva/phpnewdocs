export enum BaseVariants {
	solid,
	contained,
	bordered,
	light,
	ghost,
	shadow
}

export enum ColorVariants {
	primary,
	secondary,
	tertiary,
	default,
	success,
	warning,
	danger,
	surface,
}

export enum SizeVariants {
	xs,
	sm,
	md,
	lg,
	xl
}

export enum TextAlignmentOptions {
	left,
	center,
	right,
	inherit
}

export enum Positioning {
	topStart,
	topCenter,
	topEnd,
	Start,
	Center,
	End,
	bottomStart,
	bottomCenter,
	bottomEnd
}

export interface WithAnyContent {
	children?: React.ReactNode | React.ReactNode[] | string;
}

export interface WithStartContent {
	startContent?: React.ReactNode;
}

export interface WithEndContent {
	endContent?: React.ReactNode;
}

export interface WithLoadingState {
	loading?: boolean;
}

export interface WithDisabledState {
	disabled?: boolean;
}

export interface WithFullWidth {
	fullWidth?: boolean;
}

export interface WithPositioning {
	position?: keyof typeof Positioning;
}

export interface WithDualContent extends WithStartContent, WithEndContent { }

export type ComponentVariants = keyof typeof BaseVariants;
export type ThemeColors = keyof typeof ColorVariants;
export type ComponentSizes = keyof typeof SizeVariants;

export type TextAlignment = keyof typeof TextAlignmentOptions;

export interface WithTextAlignment {
	textAlign?: TextAlignment;
}

export interface WithWidgetOptions extends WithTextAlignment, WithDisabledState, WithLoadingState, WithFullWidth {
	color?: ThemeColors;
	variant?: ComponentVariants;
	size?: ComponentSizes;
}