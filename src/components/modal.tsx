import { ComponentSizes, Positioning, WithPositioning } from "@/types/variants";
import { cn } from "@/utils/cn";
import { forwardRef, useEffect } from "react";
import Card from "./card";
import Button from "./button";
import Typography from "./typography";

enum BackdropOptions {
  blur,
  overlay,
  transparent,
}

enum ScrollOptions {
  overlay,
  modal,
  disabled,
}

interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    WithPositioning {
  isOpen: boolean;
  onClose: () => void;
  allowCloseOutside?: boolean;
  backdrop?: keyof typeof BackdropOptions;
  preventScroll?: boolean;
  size?: ComponentSizes;
  shadow?: ComponentSizes;
  dialogTitle?: string | React.ReactNode;
  scrollOptions?: keyof typeof ScrollOptions;
  backdropClassNames?: string;
  modalClassNames?: string;
}

const MODAL_BASE_CLASSES = "absolute m-auto";

const MODAL_SIZES_CLASSES: Record<ComponentSizes, string> = {
  xs: "max-w-sm",
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-xl",
  xl: "max-w-2xl",
};

const MODAL_SHADOW_VARIANTS: Record<ComponentSizes, string> = {
  xs: "shadow-xs shadow-primary",
  sm: "shadow-sm shadow-primary",
  md: "shadow-md shadow-primary",
  lg: "shadow-lg shadow-primary",
  xl: "shadow-xl shadow-primary",
};

const MODAL_POSITIONS_CLASSES: Record<keyof typeof Positioning, string> = {
  topStart: "left-4 top-4",
  topCenter: "left-4 right-4 top-4",
  topEnd: "right-4 top-4",
  Start: "left-4 top-4 bottom-4 content-center",
  Center: "left-4 right-4 top-4 bottom-4 content-center",
  End: "right-4 top-4 bottom-4 content-center",
  bottomStart: "left-4 bottom-4",
  bottomCenter: "right-4 left-4 bottom-4",
  bottomEnd: "right-4 bottom-4",
};

const BACKDROP_BASE_CLASSES =
  "fixed top-0 bottom-0 left-0 w-dvw h-dvh bg-surface/1 max-h-dvh z-50";

const BACKDROP_VARIANT_CLASSES: Record<keyof typeof BackdropOptions, string> = {
  blur: "backdrop-blur",
  overlay: "bg-surface/50",
  transparent: "bg-transparent",
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      preventScroll = true,
      shadow,
      dialogTitle,
      modalClassNames,
      backdropClassNames,
      scrollOptions = "overlay",
      position = "topCenter",
      allowCloseOutside = true,
      backdrop = "overlay",
      size = "md",
      ...rest
    },
    ref
  ) => {
    useEffect(() => {
      if (!isOpen) return;

      const escHandler = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", escHandler);
      return () => window.removeEventListener("keydown", escHandler);
    }, [isOpen, onClose]);

    useEffect(() => {
      if (preventScroll) {
        document.body.classList.toggle("overflow-hidden", isOpen);
      }

      return () => {
        if (preventScroll) {
          document.body.classList.remove("overflow-hidden");
        }
      };
    }, [isOpen, preventScroll]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (allowCloseOutside && e.target === e.currentTarget) {
        onClose();
      }
    };

    return isOpen ? (
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={dialogTitle ? "modal-title" : undefined}
        onClick={handleBackdropClick}
        className={cn(
          BACKDROP_BASE_CLASSES,
          BACKDROP_VARIANT_CLASSES[backdrop],
          scrollOptions === "overlay" && "overflow-y-auto",
          backdropClassNames
        )}
      >
        <div
          className={cn(
            MODAL_BASE_CLASSES,
            MODAL_SIZES_CLASSES[size],
            MODAL_POSITIONS_CLASSES[position]
          )}
        >
          <Card
            elevation="highest"
            size="xs"
            className={cn(
              shadow && MODAL_SHADOW_VARIANTS[shadow],
              scrollOptions === "modal" && "max-h-full overflow-y-auto",
              scrollOptions === "overlay" && "min-h-min",
              modalClassNames,
              rest.className
            )}
          >
            <div
              className={cn(
                "flex items-start gap-4 ps-4 pt-1",
                dialogTitle ? "justify-between" : "justify-end"
              )}
            >
              {dialogTitle &&
                (typeof dialogTitle === "string" ? (
                  <Typography id="modal-title" variant="title" color="surface">
                    {dialogTitle}
                  </Typography>
                ) : (
                  dialogTitle
                ))}
              <Button
                aria-label="Close dialog"
                size="sm"
                onClick={onClose}
                variant="light"
                color="surface"
              >
                &times;
              </Button>
            </div>
            <div className="p-4">{rest.children}</div>
          </Card>
        </div>
      </div>
    ) : null;
  }
);

Modal.displayName = "Modal";

export default Modal;
