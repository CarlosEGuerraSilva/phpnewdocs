import { IconProps } from "@/types/icon-props";

const CommandIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
  const dimension = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || dimension}
      height={props.height || dimension}
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={4}
        d="M18 18v-7a7 7 0 1 0-7 7h7Zm0 0v12m0-12h12m0 0v-7a7 7 0 1 1 7 7h-7Zm0 0v12m-12 0h-7a7 7 0 1 0 7 7v-7Zm0 0h12m0 0v7a7 7 0 1 0 7-7h-7Z"
      />
    </svg>
  );
};

export { CommandIcon };
