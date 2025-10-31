import { IconProps } from "@/types/icon-props";

const SunIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
  const dimension = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || dimension}
      height={props.height || dimension}
      viewBox="0 0 1160 1160"
      fill="none"
      {...props}
    >
      <g filter="url(#fx_sun_a)">
        <path
          fill="#EE8029"
          d="M538.027 63.286c24.074-20.914 59.872-20.914 83.946 0l82.985 72.092a64 64 0 0 0 47.53 15.444l109.511-9.547c31.77-2.769 60.73 18.272 67.914 49.342l24.761 107.101a64 64 0 0 0 29.376 40.432l94.21 56.646c27.33 16.433 38.39 50.478 25.94 79.837l-42.92 101.201a63.941 63.941 0 0 0 0 49.977l42.92 101.201c12.45 29.358 1.39 63.404-25.94 79.837l-94.21 56.645a64.002 64.002 0 0 0-29.376 40.432l-24.761 107.104c-7.184 31.07-36.144 52.11-67.914 49.34l-109.511-9.55a64.017 64.017 0 0 0-47.53 15.45l-82.985 72.09c-24.074 20.91-59.872 20.91-83.946 0l-82.985-72.09a64.017 64.017 0 0 0-47.53-15.45l-109.511 9.55c-31.77 2.77-60.73-18.27-67.914-49.34l-24.761-107.104a64.002 64.002 0 0 0-29.376-40.432l-94.207-56.645c-27.33-16.433-38.392-50.479-25.94-79.837l42.92-101.201a64.004 64.004 0 0 0 0-49.977l-42.92-101.201c-12.452-29.359-1.39-63.404 25.94-79.837l94.207-56.646a64 64 0 0 0 29.376-40.432l24.761-107.101c7.184-31.07 36.144-52.111 67.914-49.342l109.511 9.547a64 64 0 0 0 47.53-15.444l82.985-72.092Z"
        />
      </g>
      <g filter="url(#fx_sun_b)">
        <circle cx={579.5} cy={600.322} r={386.5} fill="#E8B227" />
      </g>
      <defs>
        <filter
          id="fx_sun_a"
          width={1153.77}
          height={1201.64}
          x={3.113}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={23.8} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.533333 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1023_16"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1023_16"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={30.45} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.39 0" />
          <feBlend in2="shape" result="effect2_innerShadow_1023_16" />
        </filter>
        <filter
          id="fx_sun_b"
          width={883}
          height={883}
          x={138}
          y={158.822}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={5}
            result="effect1_dropShadow_1023_16"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={25} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1023_16"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1023_16"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SunIcon;
