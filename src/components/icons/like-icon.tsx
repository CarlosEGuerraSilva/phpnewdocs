import { IconProps } from "@/types/icon-props";

const LikeIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
  const dimension = typeof size === "number" ? `${size}px` : size;
  const randomId = Math.random().toString(36).substring(2, 15);
  const iconId = `like_icon_${randomId}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || dimension}
      height={props.height || dimension}
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <mask id={iconId} fill="#fff">
        <rect width={10} height={30} x={1} y={18} rx={3} />
      </mask>
      <rect
        width={10}
        height={30}
        x={1}
        y={18}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={8}
        mask={`url(#${iconId})`}
        rx={3}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M31.226 2.387a.51.51 0 0 1 .29.016c.06.025.126.07.185.148.12.157.204.436.085.778L27.81 14.754c-1.13 3.25 1.283 6.644 4.723 6.644h11.445c.434 0 .724.448.545.843a4.598 4.598 0 0 0 .383 4.467l.383.565a1 1 0 0 1 .037 1.062l-.433.747a5 5 0 0 0 0 5.017l.603 1.04a1 1 0 0 1 .047.914l-1.088 2.41a5 5 0 0 0-.075 3.937l.09.224A1 1 0 0 1 43.545 44H15a1 1 0 0 1-1-1V20.894c0-.31.148-.645.443-.89 1.334-1.104 3.584-3.08 5.63-5.421 1.99-2.276 4.037-5.177 4.581-8.124.19-1.027.883-1.874 2.127-2.593 1.262-.73 2.886-1.196 4.445-1.48Z"
      />
    </svg>
  );
};

export { LikeIcon };
