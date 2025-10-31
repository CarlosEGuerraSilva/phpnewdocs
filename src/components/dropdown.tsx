import { Positioning, WithDisabledState } from "@/types/variants";
import { cn } from "@/utils/cn";
import { forwardRef } from "react";

export interface DropdownProps extends WithDisabledState {
  trigger: React.ReactNode;
  content: React.ReactNode;
  position?: keyof typeof Positioning;
}

const HOVER_BRIDGE_CLASSES: Record<keyof typeof Positioning, string> = {
  topStart: "before:-top-2",
  topCenter: "before:-top-2",
  topEnd: "before:-top-2",
  Start: "before:-left-2",
  Center: "before:-bottom-2",
  End: "before:-right-2",
  bottomStart: "before:-bottom-2",
  bottomCenter: "before:-bottom-2",
  bottomEnd: "before:-bottom-2",
};

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ trigger, content, disabled, position = "bottomCenter" }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative",
          disabled ? "pointer-events-none opacity-50" : ""
        )}
      >
        <div className="cursor-pointer">{trigger}</div>
        <div
          className={cn(
            "hidden group-hover:block before:absolute before:inset-0 before:content-['']",
            HOVER_BRIDGE_CLASSES[position]
          )}
        >
          {content}
        </div>
      </div>
    );
  }
);
Dropdown.displayName = "Dropdown";

export { Dropdown };
