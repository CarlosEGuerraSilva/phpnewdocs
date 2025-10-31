import { IconProps } from "@/types/icon-props";

const DownloadIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
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
        strokeLinecap="round"
        strokeWidth={4}
        d="M4 37v4a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3v-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M14 27.706 24 37m0 0 10-9.294M24 37V4"
      />
    </svg>
  );
};

export { DownloadIcon };
