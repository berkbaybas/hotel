import * as React from "react";

function HamburgerMenu(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21 12H8M21 6H3M21 18H6"
        stroke="#4C997F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoHamburgerMenu = React.memo(HamburgerMenu);
export default MemoHamburgerMenu;
