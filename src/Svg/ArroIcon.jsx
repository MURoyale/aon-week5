import React from "react";

function ArroIcon({ color = "#999999" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.00005 5.99994C9.00005 5.99994 15 10.4188 15 11.9999C15 13.5811 9 17.9999 9 17.9999"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ArroIcon;
