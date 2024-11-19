// icon:info_circle | System UIcons https://systemuicons.com/ | Corey Ginnivan
import * as React from "react";

function IconInfo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="5em"
      width="5em"
      {...props}
    >
      <g fill="none" fillRule="evenodd" transform="translate(2 2)">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16.5 8.5 A8 8 0 0 1 8.5 16.5 A8 8 0 0 1 0.5 8.5 A8 8 0 0 1 16.5 8.5 z" />
          <path d="M8.5 12.5v-4h-1M7.5 12.5h2" />
        </g>
        <path
          fill="currentColor"
          d="M9.5 5.5 A1 1 0 0 1 8.5 6.5 A1 1 0 0 1 7.5 5.5 A1 1 0 0 1 9.5 5.5 z"
        />
      </g>
    </svg>
  );
}

export default IconInfo;
