import { IconProps } from "@/types/icon-props";

const MoonIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
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
      <g filter="url(#a)">
        <path
          fill="#66757F"
          d="M621 0c13.633 0 18.955 17.41 8.582 26.256C522.136 117.874 454 254.23 454 406.5 454 682.366 677.634 906 953.5 906c34.667 0 68.51-3.532 101.18-10.256 22.01-4.527 40.3 19.372 26.61 37.188C975.273 1071 808.531 1160 621 1160c-320.325 0-580-259.675-580-580S300.675 0 621 0Z"
        />
      </g>
      <g fill="#4D5860" filter="url(#b)">
        <path d="M851.5 968c45.011 0 81.5 36.49 81.5 81.5 0 7.37-.98 14.51-2.813 21.3a578.022 578.022 0 0 1-109.842 54.03C790.791 1112.59 770 1083.48 770 1049.5c0-45.01 36.489-81.5 81.5-81.5ZM542.5 942c38.384 0 69.5 31.116 69.5 69.5 0 38.38-31.116 69.5-69.5 69.5s-69.5-31.12-69.5-69.5c0-38.384 31.116-69.5 69.5-69.5ZM208.5 831c38.384 0 69.5 31.116 69.5 69.5S246.884 970 208.5 970a69.528 69.528 0 0 1-19.246-2.701 582.554 582.554 0 0 1-50.217-64.531A71.184 71.184 0 0 1 139 900.5c0-38.384 31.116-69.5 69.5-69.5ZM636.51 792.544a500.745 500.745 0 0 0 63.224 44.283C697.33 858.856 678.669 876 656 876c-24.301 0-44-19.699-44-44 0-17.301 9.987-32.268 24.51-39.456ZM385.5 609c48.325 0 87.5 39.175 87.5 87.5S433.825 784 385.5 784 298 744.825 298 696.5s39.175-87.5 87.5-87.5ZM166.5 485c26.234 0 47.5 21.266 47.5 47.5S192.734 580 166.5 580 119 558.734 119 532.5s21.266-47.5 47.5-47.5ZM361 333c20.435 0 37 16.565 37 37s-16.565 37-37 37-37-16.565-37-37 16.565-37 37-37ZM224.916 156.304C242.841 173.502 254 197.697 254 224.5c0 52.191-42.309 94.5-94.5 94.5-18.085 0-34.982-5.082-49.345-13.893 30.037-55.7 68.917-105.929 114.761-148.803ZM454.37 24.293C465.805 34.546 473 49.433 473 66c0 30.928-25.072 56-56 56s-56-25.072-56-56c0-1.582.066-3.148.194-4.696a576.149 576.149 0 0 1 93.176-37.011Z" />
      </g>
      <defs>
        <filter
          id="a"
          width={1056.01}
          height={1210}
          x={41}
          y={-27}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={11} dy={23} />
          <feGaussianBlur stdDeviation={26} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1023_9" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-27} />
          <feGaussianBlur stdDeviation={14.5} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="effect1_innerShadow_1023_9"
            result="effect2_innerShadow_1023_9"
          />
        </filter>
        <filter
          id="b"
          width={822.845}
          height={1100.54}
          x={110.155}
          y={24.293}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius={8}
            result="effect1_innerShadow_1023_9"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={19.75} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1023_9" />
        </filter>
      </defs>
    </svg>
  );
};

export default MoonIcon;
