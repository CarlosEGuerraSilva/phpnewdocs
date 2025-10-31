import { IconProps } from "@/types/icon-props";

const DocsIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
  const dimension = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || dimension}
      height={props.height || dimension}
      viewBox="0 0 48 48"
      {...props}
    >
      <rect
        width={40}
        height={40}
        x={4}
        y={4}
        stroke="currentColor"
        strokeWidth={4}
        rx={5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={4}
        d="M11 12h26M11 25h19M11 31h26M11 37h26"
      />
    </svg>
  );
};

export { DocsIcon };
