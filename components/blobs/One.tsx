import React from "react";

export const One = () => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 scale-75 rotate-90 opacity-25 top-1/4 md:top-0 md:h-full lg:scale-150 md:w-full -z-10"
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
        d="M26,-8.2C30.6,5.4,28.8,21.4,22.1,25C15.3,28.7,3.5,20,-5,12.5C-13.5,5,-18.7,-1.4,-17.3,-10.8C-16,-20.1,-8,-32.5,1.4,-32.9C10.8,-33.4,21.5,-21.9,26,-8.2Z"
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
