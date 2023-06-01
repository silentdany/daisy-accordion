import React from "react";

export const Two = () => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 scale-75 md:scale-125 rotate-90 opacity-25 -z-10"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stop-color="rgba(6, 182, 212, 1)" offset="0%"></stop>
          <stop
            id="stop2"
            stop-color="rgba(59, 130, 246, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M30.5,-20.9C36,-17.5,34.3,-5,31.4,7C28.5,19,24.4,30.5,17.5,32.3C10.6,34,1,26,-6.4,19.9C-13.7,13.8,-18.7,9.6,-21.7,3.1C-24.7,-3.5,-25.7,-12.4,-21.8,-15.4C-17.8,-18.4,-8.9,-15.5,1.8,-17C12.5,-18.4,25.1,-24.2,30.5,-20.9Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
        style={{ transition: "all 0.3s ease 0s" }}
        stroke="url(#sw-gradient)"
      ></path>
    </svg>
  );
};
