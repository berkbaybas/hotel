import * as React from "react";

function Triangle(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 7 7" fill="none" {...props}>
      <path
        d="M5.72.28L.28 5.72A.75.75 0 00.81 7H5.5A1.5 1.5 0 007 5.5V.81A.75.75 0 005.72.28z"
        fill="#326654"
      />
    </svg>
  );
}

const MemoTriangle = React.memo(Triangle);
export default MemoTriangle;
