import { IconProps } from "@/types/icon-props";

const DonateIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
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
      <g clipPath="url(#donate_icon_a)">
        <path
          stroke="currentColor"
          strokeWidth={4}
          d="M4.933 7.909C-5.417 22.9 14.194 39.558 24 44c9.806-4.442 29.417-21.1 19.067-36.091C37.728.176 27.813 5.132 24 12.263 20.187 5.133 10.272.176 4.933 7.91Z"
        />
      </g>
      <defs>
        <clipPath id="donate_icon_a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { DonateIcon };
