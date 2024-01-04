import * as React from "react"
const AnonSvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M27.398 6.667a3 3 0 0 1 2.97 2.575l1.299 9.091H8.333l1.299-9.09a3 3 0 0 1 2.97-2.576h14.796Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M31.667 18.333H35m-3.333 0-1.299-9.09a3 3 0 0 0-2.97-2.576H12.602a3 3 0 0 0-2.97 2.575l-1.299 9.091m23.334 0H8.333m-3.333 0h3.333m8.32 9.62a5 5 0 1 0-9.972.762 5 5 0 0 0 9.971-.762Zm0 0a5 5 0 0 1 6.695 0m0 0a5 5 0 1 0 9.971.762 5 5 0 0 0-9.971-.763Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={20}
        x2={20}
        y1={6.667}
        y2={41.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
    </defs>
  </svg>
)
export default AnonSvgComponent
