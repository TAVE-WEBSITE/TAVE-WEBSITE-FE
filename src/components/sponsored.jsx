import React from "react";
import CodeitLogo from "../assets/images/CodeitLogo.svg";
import AlpacoLogo from "../assets/images/AlpacoLogo.svg";
import BBCareerLogo from "../assets/images/BBCareerLogo.svg";
import LetsCareerLogo from "../assets/images/home/LetsCareerLogo.svg";
import FLabLogo from "../assets/images/FLabLogo.svg";
import ModoodocLogo from "../assets/images/ModoodocLogo.png";

export default function Sponsored() {
  return (
    <>
      <div className="grid grid-cols-3 justify-items-center gap-5 md:gap-6" style={{ justifyItems: 'center', alignItems: 'center' }}>
        
        {/* Codeit */}
        <a 
          href="https://www.codeit.kr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          <img 
            src={CodeitLogo} 
            alt="코드잇 로고" 
            className="w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem] rounded-[10px] object-contain" 
          />
        </a>

        {/* Alpaco */}
        <a 
          href="https://corp.alpaco.co.kr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          <img 
            src={AlpacoLogo} 
            alt="알파코 로고" 
            className="w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem] rounded-[10px] object-contain" 
          />
        </a>

        {/* LetsCareer */}
        <a 
          href="https://www.letscareer.co.kr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          <img 
            src={LetsCareerLogo} 
            alt="렛서리어 로고" 
            className="w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem] rounded-[10px] object-contain" 
          />
        </a>

        {/* Modoodoc */}
        <a 
          href="https://modoodoc.career.greetinghr.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          <img 
            src={ModoodocLogo} 
            alt="모두닥 로고" 
            className="w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem] rounded-[10px] object-contain" 
          />
        </a>

      </div>
    </>
  );
}
