import { IconProps } from "@/types/icon-props";

const CheckmarkIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
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
        d="M3 27L13.0372 39.188C14.2372 40.6451 16.4687 40.6451 17.6687 39.188L45 6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { CheckmarkIcon };
