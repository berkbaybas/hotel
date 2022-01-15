import * as React from 'react'

function ChevronUp(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 8" fill="none" {...props}>
      <path
        d="M13 7L7 1 1 7"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoChevronUp = React.memo(ChevronUp)
export default MemoChevronUp
