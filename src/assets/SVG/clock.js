import * as React from "react"
const ClockSvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M35.417 20c0 8.514-6.903 15.417-15.417 15.417S4.583 28.514 4.583 20 11.485 4.583 20 4.583c8.514 0 15.417 6.903 15.417 15.417Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 12.917V20l4.583 4.583M35.417 20c0 8.514-6.903 15.417-15.417 15.417S4.583 28.514 4.583 20 11.485 4.583 20 4.583c8.514 0 15.417 6.903 15.417 15.417Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={20}
        x2={20}
        y1={4.583}
        y2={117.639}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
    </defs>
  </svg>
)
export default ClockSvgComponent
