import * as React from "react"
const AccurateSvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M35 20c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15m7.952 17.499A8.333 8.333 0 1 1 17.5 12.048m5.833 4.619h4.596a5 5 0 0 0 3.536-1.465l3.892-3.892a.417.417 0 0 0-.163-.69l-4.36-1.453-1.454-4.36a.417.417 0 0 0-.69-.164l-3.892 3.893a5 5 0 0 0-1.465 3.535v4.596Zm0 0L20 20"
    />
    <circle cx={20} cy={20} r={15} fill="url(#a)" />
    <defs>
      <linearGradient
        id="a"
        x1={20}
        x2={-42.5}
        y1={5}
        y2={99.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
    </defs>
  </svg>
)
export default AccurateSvgComponent
