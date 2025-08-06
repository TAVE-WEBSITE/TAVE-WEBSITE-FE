import React, { useState, useEffect } from "react";
import LogoTave from "../assets/images/LogoTave.svg";
import HoverIcon from "../assets/images/HeaderHover.svg";
import { useNavigate } from "react-router-dom";

export default function Header({ isBlack }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  
  // 화면 크기 변경 시 모바일 메뉴 자동 닫기
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const applyHandler = () => {
    navigate("/apply");
  };

  /**
   * 지원 기간 O 모바일 버전
 * <a href="https://forms.gle/xBwZ9nnk4nnezVeX8" className="cursor-pointer text-base font-bold">
    지원하기
  </a>
  지원 기간 O 데스크탑 버전
  <button onClick={() => (window.location.href = 'https://forms.gle/xBwZ9nnk4nnezVeX8')} 
    className="hover:from-[#5989FF] hover:to-[#5989FF] bg-gradient-to-r from-[#6D3CFF] to-[#1A5BFF] py-2 px-6 rounded-2xl text-center z-50">
      지원하기
  </button>

 */

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        isBlack
          ? "bg-[#121212]"
          : "bg-gradient-to-b from-[#121212] from-30% to-transparent"
      } ${isMenuOpen ? "bg-[#121212]" : ""}`}
    >
      {/* PC 헤더 */}
      <div className="hidden md:flex items-center justify-between py-4 px-20 z-50">
        <a href="/" className="items-start relative z-50">
          <img src={LogoTave} className="w-32 h-auto" alt="taveLogo" />
        </a>
        <nav className="flex items-end text-white">
          <ul className="flex items-center gap-x-10">
            {["ACTIVITY", "STUDY", "PROJECT"].map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={item.toLowerCase()}
                  className="cursor-pointer relative z-50"
                >
                  {item}
                </a>
                <img
                  className="
        absolute opacity-0 transform transition-all duration-300 
        group-hover:opacity-100 group-hover:translate-y-0 z-10 bottom-0.5 right-[-0.8rem]
      "
                  src={HoverIcon}
                  alt={`${item} hover icon`}
                />
              </li>
            ))}
            <a
              href="https://recruit.tave-wave.com"
              className="hover:from-[#5989FF] hover:to-[#5989FF] bg-gradient-to-r from-[#6D3CFF] to-[#1A5BFF] py-2 px-6 rounded-2xl text-center z-50"
            >
              지원하기
            </a>
          </ul>
        </nav>
      </div>

      {/* 모바일 헤더 */}
      <div
        className={`fixed top-0 w-full flex md:hidden items-center justify-between py-4 px-4 z-50 ${
          isMenuOpen
            ? "bg-[#121212]"
            : isBlack
            ? "bg-[#121212]"
            : "bg-gradient-to-b from-[#121212] from-30% to-transparent"
        }`}
      >
        <a href="/" className="items-start">
          <img src={LogoTave} className="w-20 h-auto" alt="taveLogo" />
        </a>
        <button
          onClick={handleMenuToggle}
          className="w-8 h-8 flex flex-col justify-center items-center md:hidden focus:outline-none"
        >
          <div
            className={`hamburger space-y-1.5 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "open" : ""
            }`}
          >
            <span
              className={`block w-5 h-0.5 bg-white rounded transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white rounded transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white rounded transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <>
        {/* 오버레이 */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={handleMenuToggle}
          ></div>
        )}

        {/* 메뉴 */}
        <ul
          className={`fixed top-16 w-full bg-[#121212] text-white pl-5 pb-5 z-40 transition-all duration-500 ease-in-out transform ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 "
          }`}
        >
          {["ACTIVITY", "STUDY", "PROJECT"].map((item, index) => (
            <li key={index} className="text-base py-3 font-extralight">
              <a
                href={item.toLowerCase()}
                className="cursor-pointer relative z-10"
              >
                {item}
              </a>
            </li>
          ))}
          <li className="py-3">
            <div className="flex items-center justify-center bg-gradient-to-r from-[#6D3CFF] to-[#1A5BFF] rounded-lg hover:from-[#5989FF] hover:to-[#5989FF] text-center w-20 h-9">
              <a
                className="cursor-pointer text-base font-bold"
                 href="https://recruit.tave-wave.com"
              >
                {" "}
                지원하기
              </a>
            </div>
          </li>
        </ul>
      </>
    </header>
  );
}
