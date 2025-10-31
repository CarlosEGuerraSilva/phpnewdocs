import { IconProps } from "@/types/icon-props";

const DislikeIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
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
        x={47}
        y={30}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={8}
        mask={`url(#${iconId})`}
        rx={3}
        transform="rotate(180 47 30)"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16.774 45.613a.51.51 0 0 1-.29-.016.446.446 0 0 1-.185-.148c-.12-.157-.204-.436-.085-.778l3.976-11.425c1.13-3.25-1.283-6.644-4.723-6.644H4.02a.598.598 0 0 1-.544-.843 4.598 4.598 0 0 0-.383-4.467l-.383-.565a1 1 0 0 1-.037-1.062l.433-.747a5 5 0 0 0 0-5.017l-.603-1.04a1 1 0 0 1-.047-.914l1.088-2.41A5 5 0 0 0 3.62 5.6l-.09-.224A1 1 0 0 1 4.455 4H33a1 1 0 0 1 1 1v22.106c0 .31-.148.645-.443.89-1.334 1.104-3.584 3.08-5.63 5.421-1.99 2.276-4.037 5.177-4.581 8.124-.19 1.027-.883 1.874-2.127 2.593-1.262.73-2.886 1.196-4.445 1.48Z"
      />
    </svg>
  );
};

export { DislikeIcon };
