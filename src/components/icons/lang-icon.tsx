import { IconProps } from "@/types/icon-props";

const LangIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
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
      <g clipPath="url(#lang_icon_a)">
        <circle cx={24} cy={24} r={23} fill="url(#lang_icon_b)" />
        <g filter="url(#lang_icon_c)">
          <path
            fill="#164D80"
            fillRule="evenodd"
            d="M24 1c3.17 0 6.191.641 8.94 1.802C36.873 5.453 39.946 9.796 41.613 15h3.559c.277.652.525 1.32.742 2h-3.74c.538 2.225.826 4.577.826 7s-.288 4.775-.825 7h3.74c-.218.68-.466 1.348-.743 2h-3.559c-1.667 5.204-4.74 9.546-8.673 12.197A22.928 22.928 0 0 1 24 47c-3.171 0-6.192-.642-8.94-1.803C11.126 42.546 8.054 38.204 6.387 33H2.828a22.832 22.832 0 0 1-.742-2h3.74A29.854 29.854 0 0 1 5 24c0-2.423.288-4.775.825-7h-3.74c.218-.68.466-1.348.743-2h3.559c1.667-5.204 4.74-9.547 8.673-12.198A22.928 22.928 0 0 1 24 1Zm-6.352 32c.396 2.618.956 4.967 1.64 6.935.703 2.02 1.516 3.584 2.37 4.623C22.518 45.603 23.315 46 24 46s1.482-.397 2.342-1.442c.854-1.04 1.667-2.603 2.37-4.623.684-1.968 1.244-4.317 1.64-6.935H17.648ZM8.48 33c2.104 6.057 6.259 10.588 11.213 12.277-.881-1.232-1.65-2.832-2.295-4.685-.755-2.172-1.359-4.746-1.772-7.592H8.48Zm23.894 0c-.413 2.846-1.017 5.42-1.772 7.592-.645 1.853-1.415 3.453-2.296 4.685 4.955-1.689 9.11-6.22 11.213-12.277h-7.145ZM7.876 17A27.93 27.93 0 0 0 7 24c0 2.461.31 4.812.876 7h7.496A64.772 64.772 0 0 1 15 24c0-2.433.13-4.784.372-7H7.876Zm9.51 0A62.59 62.59 0 0 0 17 24c0 2.45.137 4.802.386 7h13.228A62.59 62.59 0 0 0 31 24c0-2.45-.137-4.802-.386-7H17.386Zm15.242 0c.242 2.216.372 4.567.372 7s-.13 4.784-.372 7h7.496c.567-2.188.876-4.539.876-7 0-2.461-.31-4.812-.876-7h-7.496ZM19.693 2.722C14.738 4.41 10.584 8.942 8.48 15h7.146c.413-2.846 1.017-5.42 1.772-7.592.645-1.853 1.413-3.454 2.295-4.686ZM24 2c-.685 0-1.482.397-2.342 1.442-.854 1.04-1.667 2.603-2.37 4.623-.684 1.968-1.244 4.317-1.64 6.935h12.704c-.396-2.618-.956-4.967-1.64-6.935-.703-2.02-1.516-3.584-2.37-4.623C25.482 2.397 24.685 2 24 2Zm4.306.722c.882 1.232 1.65 2.833 2.296 4.686.755 2.172 1.359 4.746 1.772 7.592h7.145C37.416 8.942 33.261 4.41 28.306 2.722Z"
            clipRule="evenodd"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id="lang_icon_b"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(44.076 -12.63 27.395) scale(43.8463)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2D97ED" />
          <stop offset={1} stopColor="#165B94" />
        </radialGradient>
        <clipPath id="lang_icon_a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
        <filter
          id="lang_icon_c"
          width={49.028}
          height={51.2}
          x={-0.514}
          y={-1.6}
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
          <feGaussianBlur stdDeviation={1.3} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1056_2075"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1056_2075"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LangIcon;
