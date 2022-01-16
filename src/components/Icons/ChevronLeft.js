import * as React from "react";

function ChevronLeft(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 11 18" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.78 10.024c1.752 1.401 3.897 3.534 5.338 6.417L7.882 17.56c-1.226-2.45-3.081-4.317-4.663-5.583-.787-.63-1.493-1.1-2-1.411a14.494 14.494 0 00-.74-.427l-.033-.017-.005-.003V7.882l.005-.002.034-.018.15-.081c.136-.075.337-.19.59-.345a20.094 20.094 0 001.999-1.412C4.801 4.758 6.656 2.892 7.882.441l2.236 1.118C8.677 4.442 6.532 6.575 4.78 7.976A23.1 23.1 0 013.399 9c.417.286.886.627 1.382 1.024z"
        fill="#000"
      />
    </svg>
  );
}

const MemoChevronLeft = React.memo(ChevronLeft);
export default MemoChevronLeft;
