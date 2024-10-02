import React from "react";
import TaveLogo from "../assets/images/taveLogo.png";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-20 bg-black">
      <div className="items-start">
        <img src={TaveLogo} className="w-32 h-auto"></img>
      </div>
      <nav className="flex items-end text-white">
        <ul className="flex items-center space-x-10">
          <li>
            <a href="#" className="cursor:pointer">
              ACTIVITY
            </a>
          </li>
          <li>
            <a href="#" className="cursor:pointer">
              STUDY
            </a>
          </li>
          <li>
            <a href="#" className="cursor:pointer">
              PROJECT
            </a>
          </li>
          <li>
            <div className="bg-gradient-to-r from-[#6D3CFF] to-[#1A5BFF] py-2 px-6 rounded-2xl text-center">
              <a href="#" className="cursor:pointer">
                지원하기
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
