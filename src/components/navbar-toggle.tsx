import Button, { ButtonProps } from "./button";

interface NavbarToggleProps extends ButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function NavbarToggle({ isOpen, onClick, ...props }: NavbarToggleProps) {
  return (
    <Button variant="light" color="surface" onClick={onClick} {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        <rect
          x="4"
          y="11"
          width="16"
          height="2"
          rx="1"
          fill="currentColor"
          style={{
            transformOrigin: "12px 12px",
            transform: isOpen
              ? "rotate(45deg)"
              : "rotate(0deg) translateY(-3px)",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <rect
          x="4"
          y="11"
          width="16"
          height="2"
          rx="1"
          fill="currentColor"
          style={{
            transformOrigin: "12px 12px",
            transform: isOpen
              ? "rotate(-45deg)"
              : "rotate(0deg) translateY(3px)",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </svg>
    </Button>
  );
}
export default NavbarToggle;
