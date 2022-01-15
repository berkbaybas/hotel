import * as React from "react";

function ChevronDown(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 8" fill="none" {...props}>
      <path
        d="M1 1l6 6 6-6"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoChevronDown = React.memo(ChevronDown);
export default MemoChevronDown;
