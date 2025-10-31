import { cn } from "@/utils/cn";
import { CommandIcon } from "./icons/command-icon";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode | React.ReactNode[] | string;
}

const KBD_BASE_CLASSES =
  "inline-flex items-center rounded border border-surface-variant bg-surface-container px-1.5 py-1 text-sm font-medium text-on-surface";

export function Kbd({ children, className, ...props }: KbdProps) {
  return (
    <kbd className={cn(KBD_BASE_CLASSES, className)} {...props}>
      <span className="me-1">
        <CommandIcon size={16} />
      </span>
      {children}
    </kbd>
  );
}
