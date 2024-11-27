import React from 'react';
import LogoTave from '../assets/images/LogoTave.svg';
import HeaderHover from '../assets/images/HeaderHover.svg';

export default function Header({ isBlack }) {
    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between py-4 px-20 ${
                isBlack
                    ? 'bg-black'
                    : 'bg-gradient-to-b from-black from-30% to-transparent'
            }`}
        >
            <a href="/" className="items-start">
                <img src={LogoTave} className="w-32 h-auto" alt="taveLogo" />
            </a>
            <nav className="flex items-end text-white">
                <ul className="flex items-center gap-x-10">
                    {['ACTIVITY', 'STUDY', 'PROJECT'].map((item, index) => (
                        <li key={index} className="relative group">
                            <a href={item.toLowerCase()} className="cursor-pointer relative z-10">
                                {item}
                            </a>
                            <img
                                src={HeaderHover}
                                alt=""
                                className="absolute top-2 right-[-10px] transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </li>
                    ))}
                    <li>
                        <div className="bg-gradient-to-r from-[#6D3CFF] to-[#1A5BFF] py-2 px-6 rounded-2xl text-center">
                            <a href="apply" className="cursor-pointer">
                                지원하기
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
