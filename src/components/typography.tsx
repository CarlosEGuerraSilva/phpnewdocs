import {
  WithTextAlignment,
  ThemeColors,
  TextAlignment,
} from "@/types/variants";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";

enum Headings {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}

enum Variants {
  title,
  subtitle,
  body,
  caption,
}

interface TypographyProps extends WithTextAlignment {
  variant: keyof typeof Headings | keyof typeof Variants;
  component?: React.ElementType;
  children?: ReactNode;
  color?: ThemeColors;
  className?: string;
}

const TYPOGRAPHY_BASE_CLASSES = "font-sans";

const TYPOGRAPHY_HIERARCHY_CLASSES: Record<TypographyProps["variant"], string> =
  {
    h1: "text-5xl font-bold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-semibold",
    h4: "text-2xl font-semibold",
    h5: "text-xl font-semibold",
    h6: "text-lg font-semibold",
    title: "text-2xl font-bold",
    subtitle: "text-lg font-medium",
    body: "text-base font-normal",
    caption: "text-sm font-normal",
  };

const TYPOGRAPHY_COLOR_CLASSES: Record<ThemeColors, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  default: "text-default",
  danger: "text-danger",
  success: "text-success",
  warning: "text-warning",
  surface: "text-on-surface",
};

const TEXT_ALIGNMENT_CLASSES: Record<TextAlignment, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  inherit: "text-inherit",
};

const Typography: React.FC<TypographyProps> = ({
  color = "surface",
  textAlign = "inherit",
  variant,
  component = "p",
  children,
  className,
  ...props
}) => {
  const Tag: React.ElementType = component;
  return (
    <Tag
      className={cn(
        TYPOGRAPHY_BASE_CLASSES,
        TYPOGRAPHY_HIERARCHY_CLASSES[variant],
        TYPOGRAPHY_COLOR_CLASSES[color],
        TEXT_ALIGNMENT_CLASSES[textAlign],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Typography;
