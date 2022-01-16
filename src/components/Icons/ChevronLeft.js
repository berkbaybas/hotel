import * as React from "react";

function ChevronLeft(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 46 46" fill="none" {...props}>
      <g filter="url(#prefix__filter0_d_1637_234)">
        <path
          d="M1 22C1 9.85 10.85 0 23 0s22 9.85 22 22-9.85 22-22 22S1 34.15 1 22z"
          fill="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.78 23.024c1.752 1.401 3.897 3.534 5.338 6.417l-2.236 1.118c-1.226-2.45-3.081-4.317-4.663-5.583a20.1 20.1 0 00-2-1.411 14.5 14.5 0 00-.74-.427l-.033-.017-.005-.003v-2.235l.005-.003.034-.018.15-.081c.136-.075.337-.19.59-.345a20.11 20.11 0 001.999-1.412c1.582-1.266 3.438-3.132 4.663-5.583l2.236 1.118c-1.441 2.883-3.586 5.016-5.337 6.417-.496.397-.965.738-1.382 1.024.417.286.886.627 1.382 1.024z"
          fill="#000"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_1637_234"
          x={0}
          y={0}
          width={46}
          height={46}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.0556863 0 0 0 0 0.2 0 0 0 0.05 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1637_234"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1637_234"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoChevronLeft = React.memo(ChevronLeft);
export default MemoChevronLeft;
