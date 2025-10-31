import { cn } from "@/utils/cn";

interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {}

const InlineCode: React.FC<InlineCodeProps> = ({ ...props }) => {
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
