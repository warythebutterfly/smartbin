import React from "react";

export const NotFoundText = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 300 200"
    width="300"
    height="200"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="50%" y="40%" textAnchor="middle" fontSize="64" fill="#003464">
      404
    </text>
    <text x="50%" y="60%" textAnchor="middle" fontSize="18">
      Oops! Page not found.
    </text>
  </svg>
);
