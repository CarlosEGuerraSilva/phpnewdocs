import { IconProps } from "@/types/icon-props";

const ChevronLeftIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
  const dimension = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || dimension}
      height={props.height || dimension}
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M42 4 10.72 21.378c-2.057 1.142-2.057 4.102 0 5.244L42 44"
      />
    </svg>
  );
};

export { ChevronLeftIcon };
