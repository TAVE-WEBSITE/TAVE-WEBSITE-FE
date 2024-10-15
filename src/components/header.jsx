import React from 'react';
import TaveLogo from '../assets/images/taveLogo.svg';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-4 px-20">
            <div className="items-start">
                <img src={TaveLogo} className="w-32 h-auto"></img>
            </div>
            <nav className="flex items-end text-white">
                <ul className="flex items-center gap-x-10">
                    <li>
                        <a href="activity" className="cursor-pointer">
                            ACTIVITY
                        </a>
                    </li>
                    <li>
                        <a href="study" className="cursor-pointer">
                            STUDY
                        </a>
                    </li>
                    <li>
                        <a href="project" className="cursor-pointer">
                            PROJECT
                        </a>
                    </li>
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
