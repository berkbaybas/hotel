import * as React from "react";

function ChevronRight(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 11 18" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.22 10.024C4.467 11.425 2.322 13.558.881 16.44l2.236 1.118c1.226-2.45 3.081-4.317 4.663-5.583.787-.63 1.493-1.1 2-1.411a14.488 14.488 0 01.74-.427l.033-.017.005-.003V7.882l-.005-.002-.034-.018a14.498 14.498 0 01-.74-.426 20.094 20.094 0 01-1.999-1.412C6.199 4.758 4.344 2.892 3.118.441L.882 1.559C2.323 4.442 4.468 6.575 6.22 7.976A23.1 23.1 0 007.601 9c-.417.286-.886.627-1.382 1.024z"
        fill="#000"
      />
    </svg>
  );
}

const MemoChevronRight = React.memo(ChevronRight);
export default MemoChevronRight;
