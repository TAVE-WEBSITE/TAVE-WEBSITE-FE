import React from "react";
import { ReactComponent as CodeitLogo } from "../assets/images/CodeitLogo.svg";
import { ReactComponent as AlpacoLogo } from "../assets/images/AlpacoLogo.svg";
import { ReactComponent as BBCareerLogo } from "../assets/images/BBCareerLogo.svg";
import { ReactComponent as LetsCareerLogo } from "../assets/images/home/LetsCareerLogo.svg";

export default function Sponsored() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-5 md:gap-6">
        <a 
          href="https://www.codeit.kr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          <CodeitLogo className="w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem]" />
        </a>
        <a 
          href="https://corp.alpaco.co.kr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          <AlpacoLogo className="w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem]" />
        </a>
        <a 
          href="https://www.bbcareer.co.kr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          <BBCareerLogo className="w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem]" />
        </a>
        <a 
          href="https://www.letscareer.co.kr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          <LetsCareerLogo className="w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem]" />
        </a>

        <a 
          href="https://f-lab.kr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          <FLabLogo className="w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem] rounded-[20px]" />
        </a>

      </div>
    </>
  );
}
