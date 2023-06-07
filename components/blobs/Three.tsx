import React from "react";

export const Three = () => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 scale-75 md:scale-125 opacity-25 -z-10"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop13" stopColor="rgba(6, 182, 212, 1)" offset="0%"></stop>
          <stop
            id="stop23"
            stopColor="rgba(59, 130, 246, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M24,-13.2C31.9,-9.3,39.5,0.8,36.6,6.2C33.6,11.6,20,12.5,8.6,18C-2.8,23.6,-12,33.7,-17,32.4C-22,31.1,-22.8,18.2,-22.2,8.6C-21.6,-1.1,-19.5,-7.5,-15.6,-10.6C-11.7,-13.6,-5.8,-13.3,1.1,-14.2C8.1,-15.1,16.1,-17.2,24,-13.2Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        style={{ transition: "all 0.3s ease 0s" }}
        stroke="url(#sw-gradient)"
      ></path>
    </svg>
  );
};
