import React, { useState } from 'react';
import LogoTave from '../assets/images/LogoTave.svg';
import HoverIcon from '../assets/images/HeaderHover.svg';

export default function Header({ isBlack }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 ${
                isBlack ? 'bg-black' : 'bg-gradient-to-b from-black from-30% to-transparent'
            } ${isMenuOpen ? 'bg-[#121212]' : ''}`}
        >
            {/* PC 헤더 */}
            <div className="hidden md:flex items-center justify-between py-4 px-20 z-50">
                <a href="/" className="items-start relative z-50">
                    <img src={LogoTave} className="w-32 h-auto" alt="taveLogo" />
                </a>
                <nav className="flex items-end text-white">
                    <ul className="flex items-center gap-x-10">
                        {['ACTIVITY', 'STUDY', 'PROJECT'].map((item, index) => (
                            <li key={index} className="relative group">
                                <a href={item.toLowerCase()} className="cursor-pointer relative z-50">
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
                        <li>
                            <button className="hover:from-[#5989FF] hover:to-[#5989FF] bg-gradient-to-r from-[#6D3CFF] to-[#1A5BFF] py-2 px-6 rounded-2xl text-center">
                                <a href="apply" className="cursor-pointer relative z-50">
                                    지원하기
                                </a>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* 모바일 헤더 */}
            <div
                className={`fixed top-0 w-full flex md:hidden items-center justify-between py-4 px-4 z-50 ${
                    isMenuOpen
                        ? 'bg-[#121212]'
                        : isBlack
                        ? 'bg-black'
                        : 'bg-gradient-to-b from-black from-30% to-transparent'
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
                            isMenuOpen ? 'open' : ''
                        }`}
                    >
                        <span
                            className={`block w-5 h-0.5 bg-white rounded transform transition-all duration-300 ease-in-out ${
                                isMenuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                        ></span>
                        <span
                            className={`block w-5 h-0.5 bg-white rounded transition-opacity duration-300 ease-in-out ${
                                isMenuOpen ? 'opacity-0' : ''
                            }`}
                        ></span>
                        <span
                            className={`block w-5 h-0.5 bg-white rounded transform transition-all duration-300 ease-in-out ${
                                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* 모바일 메뉴 */}
            <>
                {/* 오버레이 */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={handleMenuToggle}></div>
                )}

                {/* 메뉴 */}
                <ul
                    className={`fixed top-16 w-full bg-[#121212] text-white pl-5 pb-5 z-40 transition-all duration-500 ease-in-out transform ${
                        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 '
                    }`}
                >
                    {['ACTIVITY', 'STUDY', 'PROJECT'].map((item, index) => (
                        <li key={index} className="text-base py-3 font-extralight">
                            <a href={item.toLowerCase()} className="cursor-pointer relative z-10">
                                {item}
                            </a>
                        </li>
                    ))}
                    <li className="py-3">
                        <div className="flex items-center justify-center bg-gradient-to-r from-[#6D3CFF] to-[#1A5BFF] rounded-lg text-center w-20 h-9">
                            <a href="apply" className="cursor-pointer text-base font-bold">
                                지원하기
                            </a>
                        </div>
                    </li>
                </ul>
            </>
        </header>
    );
}
