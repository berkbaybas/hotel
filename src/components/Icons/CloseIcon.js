import * as React from "react";

function CloseIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M13.728 13.728L1 1M13.728 1L1 13.728"
        stroke="#4C997F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoCloseIcon = React.memo(CloseIcon);
export default MemoCloseIcon;
