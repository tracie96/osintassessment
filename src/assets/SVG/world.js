import * as React from "react"
const WorldSvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M35.417 20c0 8.514-6.903 15.417-15.417 15.417S4.583 28.514 4.583 20 11.486 4.583 20 4.583 35.417 11.486 35.417 20Z"
    />
    <path
      fill="url(#b)"
      d="M30.86 30.86c-2 2-8.482-1.242-14.48-7.24-5.998-5.998-9.24-12.48-7.24-14.48s8.482 1.242 14.48 7.24c5.998 5.998 9.24 12.48 7.24 14.48Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M32.964 7.036 7.036 32.964M35.416 20c0 8.514-6.902 15.417-15.416 15.417S4.583 28.514 4.583 20 11.486 4.583 20 4.583 35.417 11.486 35.417 20ZM30.86 30.86c-2 2-8.482-1.242-14.48-7.24-5.998-5.998-9.24-12.48-7.24-14.48s8.482 1.242 14.48 7.24c5.998 5.998 9.24 12.48 7.24 14.48Z"
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
      <linearGradient
        id="b"
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
export default WorldSvgComponent
