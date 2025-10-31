import { IconProps } from "@/types/icon-props";

const CalendarIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
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
        fill="currentColor"
        d="M34 2a2 2 0 0 1 2 2v4h7a4 4 0 0 1 4 4v29a4 4 0 0 1-3.794 3.995L43 45H5l-.206-.005A4 4 0 0 1 1 41V12a4 4 0 0 1 4-4h7V4a2 2 0 1 1 4 0v4h16V4a2 2 0 0 1 2-2ZM5 41h38V22.5H5V41Zm0-22.5h38V12H5v6.5Z"
      />
    </svg>
  );
};

export { CalendarIcon };
