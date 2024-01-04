import * as React from "react"
const ServerSvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M31.667 9.167c0 2.3-5.224 4.166-11.667 4.166S8.333 11.468 8.333 9.167C8.333 6.865 13.557 5 20 5s11.667 1.865 11.667 4.167Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M31.667 9.167c0 2.3-5.224 4.166-11.667 4.166S8.333 11.468 8.333 9.167m23.334 0C31.667 6.865 26.443 5 20 5S8.333 6.865 8.333 9.167m23.334 0v21.666C31.667 33.135 26.443 35 20 35S8.333 33.135 8.333 30.833V9.167M31.667 20c0 2.301-5.224 4.167-11.667 4.167S8.333 22.3 8.333 20"
    />
    <defs>
      <linearGradient
        id="a"
        x1={20}
        x2={20}
        y1={5}
        y2={21.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
    </defs>
  </svg>
)
export default ServerSvgComponent
