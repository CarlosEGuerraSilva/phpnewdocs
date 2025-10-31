import { IconProps } from "@/types/icon-props";

const DeprecateIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
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
        d="M41 1a4 4 0 0 1 4 4v5a4 4 0 0 1-2.785 3.81l-6.188 28.464A6 6 0 0 1 30.164 47H17.836a6 6 0 0 1-5.863-4.726L5.784 13.81A4 4 0 0 1 3 10V5a4 4 0 0 1 4-4h34ZM15.882 41.425A2 2 0 0 0 17.836 43h12.328a2 2 0 0 0 1.954-1.575L38.08 14H9.918l5.964 27.425Zm.887-25.411a2 2 0 0 1 2.217 1.755l1.867 16a2 2 0 0 1-3.973.462l-1.866-16a2 2 0 0 1 1.755-2.217ZM24 16a2 2 0 0 1 2 2v16a2 2 0 1 1-4 0V18a2 2 0 0 1 2-2Zm7.231.014a2 2 0 0 1 1.755 2.217l-1.866 16a2 2 0 0 1-3.974-.462l1.868-16a2 2 0 0 1 2.217-1.755ZM7 9.999l.001.001h33.994l.003-.001.002-.001V5H7v4.999Z"
      />
    </svg>
  );
};

export { DeprecateIcon };
