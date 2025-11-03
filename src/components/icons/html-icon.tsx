import { IconProps } from "@/types/icon-props";

const HTMLIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
  const dimension = typeof size === "number" ? `${size}px` : size;
  const randomId = Math.random().toString(36).substring(2, 15);
  const iconId = `html_icon_${randomId}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || dimension}
      height={props.height || dimension}
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <mask id={`a_${iconId}`} fill="#fff">
        <rect width={46} height={19} x={1} y={28} rx={3} />
      </mask>
      <rect
        width={46}
        height={19}
        x={1}
        y={28}
        stroke="currentColor"
        strokeWidth={8}
        mask={`url(#a_${iconId})`}
        rx={3}
      />
      <mask id={`b_${iconId}`} fill="#fff">
        <path d="M43.392 13.4A3 3 0 0 1 44 15.213V29a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h25.509A3 3 0 0 1 34.9 2.189L43.392 13.4Z" />
      </mask>
      <path
        fill="currentColor"
        d="m43.392 13.4-3.19 2.416 3.19-2.415ZM44 15.213h-4V29h8V15.212h-4ZM41 32v-4H7v8h34v-4ZM4 29h4V4H0v25h4ZM7 1v4h25.509v-8H7v4Zm27.9 1.189-3.188 2.415 8.49 11.212 3.19-2.415 3.188-2.415L38.09-.226 34.9 2.189ZM32.51 1v4a1 1 0 0 1-.797-.396L34.9 2.189 38.09-.226A7 7 0 0 0 32.509-3v4ZM4 4h4a1 1 0 0 1-1 1v-8a7 7 0 0 0-7 7h4Zm3 28v-4a1 1 0 0 1 1 1H0a7 7 0 0 0 7 7v-4Zm37-3h-4a1 1 0 0 1 1-1v8a7 7 0 0 0 7-7h-4Zm0-13.788h4a7 7 0 0 0-1.42-4.226L43.392 13.4l-3.19 2.415a1 1 0 0 1-.202-.604h4Z"
        mask={`url(#b_${iconId})`}
      />
      <path
        fill="currentColor"
        d="M42 14.778 32 2l-3.448 9.998c-.72 2.087.985 4.21 3.179 3.959L42 14.777ZM7.879 42v-8.59h1.734v3.381h3.399v-3.38h1.734V42h-1.734v-3.756H9.613V42H7.88Zm10.6 0v-7.137h-2.55V33.41h6.827v1.453h-2.543V42h-1.735Zm5.378 0v-8.59h2.596l1.559 5.86 1.54-5.86h2.602V42h-1.611v-6.762L28.838 42h-1.67l-1.7-6.762V42h-1.61Zm10.067 0v-8.52h1.734v7.073h4.313V42h-6.047Z"
      />
    </svg>
  );
};

export { HTMLIcon };
