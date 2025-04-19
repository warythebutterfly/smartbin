import React from "react";

export const ServerErrorText = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 200"
    width="300"
    height="200"
    fill="currentColor"
  >
    <text x="50%" y="40%" textAnchor="middle" fontSize="64" fill="#d33">
      500
    </text>
    <text x="50%" y="60%" textAnchor="middle" fontSize="18">
      Something went wrong on our end.
    </text>
    <path
      d="M120 160 L180 160 M140 150 L140 170 M160 150 L160 170"
      stroke="#eee"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);
