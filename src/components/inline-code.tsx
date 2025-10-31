import { cn } from "@/utils/cn";

const InlineCode: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  ...props
}) => {
  return (
    <code
      className={cn(
        "font-mono p-0.5 px-2 rounded bg-surface-container-highest whitespace-nowrap",
        props.className
      )}
    >
      {props.children}
    </code>
  );
};

export default InlineCode;
