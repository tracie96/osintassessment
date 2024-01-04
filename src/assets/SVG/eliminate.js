import * as React from "react"
const EliminateSvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="#D9D9D9"
      d="M7.5 9.583c0-1.15.933-2.083 2.083-2.083h3.75a1.25 1.25 0 1 0 0-2.5h-3.75A4.583 4.583 0 0 0 5 9.583v3.75a1.25 1.25 0 1 0 2.5 0v-3.75ZM26.667 5a1.25 1.25 0 1 0 0 2.5h3.75c1.15 0 2.083.933 2.083 2.083v3.75a1.25 1.25 0 1 0 2.5 0v-3.75A4.583 4.583 0 0 0 30.417 5h-3.75ZM7.5 26.667a1.25 1.25 0 1 0-2.5 0v3.75A4.583 4.583 0 0 0 9.583 35h3.75a1.25 1.25 0 1 0 0-2.5h-3.75A2.083 2.083 0 0 1 7.5 30.417v-3.75ZM35 26.667a1.25 1.25 0 1 0-2.5 0v3.75c0 1.15-.933 2.083-2.083 2.083h-3.75a1.25 1.25 0 1 0 0 2.5h3.75A4.583 4.583 0 0 0 35 30.417v-3.75ZM17.054 15.286a1.25 1.25 0 1 0-1.768 1.768L18.232 20l-2.946 2.946a1.25 1.25 0 1 0 1.768 1.768L20 21.768l2.946 2.946a1.25 1.25 0 1 0 1.768-1.768L21.768 20l2.946-2.946a1.25 1.25 0 1 0-1.768-1.768L20 18.232l-2.946-2.946Z"
    />
    <rect width={30} height={30} x={5} y={5} fill="url(#a)" rx={4} />
    <defs>
      <linearGradient
        id="a"
        x1={20}
        x2={20}
        y1={5}
        y2={114}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
    </defs>
  </svg>
)
export default EliminateSvgComponent
