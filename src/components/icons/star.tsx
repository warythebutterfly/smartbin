import React from "react";

export const Star = ({ color = "#FFD700" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={color}
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.171L12 18.896l-7.336 3.867 1.402-8.171L.132 9.21l8.2-1.192L12 .587z" />
    </svg>
  );
};

export const StarHalf = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient id="half-gradient">
          <stop offset="50%" stop-color="#FFD700" />
          <stop offset="50%" stop-color="#e0e0e0" />
        </linearGradient>
      </defs>
      <path
        fill="url(#half-gradient)"
        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.171L12 18.896l-7.336 3.867 1.402-8.171L.132 9.21l8.2-1.192L12 .587z"
      />
    </svg>
  );
};
