import React, { useState } from "react";

export default function CoreCard({ title, description, SvgIcon, className }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="w-[300px] h-[180px] bg-[#393a40]/50 rounded-[15px] relative border
             overflow-hidden border-[#f7f8fa] border-[0.5px] flex justify-center items-center hover:bg-[#195BFF]
             transition-colors duration-300 ease-in-out"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <div
          className={`text-center text-base font-medium leading-normal absolute z-20`}
        >
          {description}
        </div>
      ) : (
        <div className={`text-center body-highlight-1`}>{title}</div>
      )}

      {React.cloneElement(SvgIcon, {
        className: `absolute transition-transform duration-300 ease-in-out ${
          isHover ? "scale-125 z-10" : "scale-100 z-[-1]"
        } ${className}`,
        fill: isHover ? "#12121233" : "#393A40",
      })}
    </div>
  );
}
