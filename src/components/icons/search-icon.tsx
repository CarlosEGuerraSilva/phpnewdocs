import { useMemo } from "react";
import { IconProps } from "@/types/icon-props";

const SearchIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
  const dimension = typeof size === "number" ? `${size}px` : size;

  const uniqueId = useMemo(
    () => Math.random().toString(36).substring(2, 9),
    []
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || dimension}
      height={props.height || dimension}
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <g clipPath={`url(#search_icon_${uniqueId})`}>
        <path
          fill="currentColor"
          d="M35.937 30.23c4.935-4.934 5.013-12.887.232-17.916l-.231-.237c-5.013-5.013-13.141-5.013-18.154 0l-.231.237c-4.78 5.029-4.703 12.982.232 17.916 4.934 4.935 12.887 5.012 17.915.232l.237-.232Zm4.95 4.95c-6.902 6.902-17.624 7.654-25.36 2.257l-7.975 7.976a3.5 3.5 0 0 1-4.95-4.95l7.976-7.976c-5.397-7.735-4.646-18.457 2.256-25.36 7.747-7.746 20.307-7.746 28.054 0 7.746 7.747 7.746 20.307 0 28.053Z"
        />
      </g>
      <defs>
        <clipPath id={`search_icon_${uniqueId}`}>
          <path fill="currentColor" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { SearchIcon };
