import { IconProps } from "@/types/icon-props";

const SourceIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
  const dimension = typeof size === "number" ? `${size}px` : size;
  const randomId = Math.random().toString(36).substring(2, 15);
  const iconId = `logos_icon_${randomId}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || dimension}
      height={props.height || dimension}
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <g clipPath={`url(#${iconId})`}>
        <path
          fill="currentColor"
          d="M17.75 5.398c0 .502-.158.991-.451 1.398L7.423 20.49a6 6 0 0 0 0 7.02l9.876 13.694c.293.407.451.896.451 1.398 0 2.319-2.971 3.278-4.328 1.397L1.531 27.51a6 6 0 0 1 0-7.018L13.422 4c1.357-1.881 4.328-.922 4.328 1.397ZM46.47 20.49a6 6 0 0 1 0 7.02L34.577 44c-1.357 1.88-4.328.92-4.328-1.398 0-.502.158-.991.451-1.398l9.876-13.695a6 6 0 0 0 0-7.018L30.701 6.796a2.39 2.39 0 0 1-.451-1.398c0-2.319 2.971-3.278 4.328-1.397l11.891 16.49Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={5}
          d="m19 33 9-18"
        />
      </g>
      <defs>
        <clipPath id={iconId}>
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { SourceIcon };
