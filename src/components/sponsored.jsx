import React from 'react';
import { ReactComponent as CodeitLogo } from '../assets/images/CodeitLogo.svg';
import { ReactComponent as AlpacoLogo } from '../assets/images/AlpacoLogo.svg';
import { ReactComponent as BBCareerLogo } from '../assets/images/BBCareerLogo.svg';

//고화질로 변경

export default function Sponsored() {
    return (
        <div className="flex md:gap-16 gap-6 md:mt-20 mt-[50px] w-full justify-center">
            <CodeitLogo />
            <AlpacoLogo />
            <BBCareerLogo />
        </div>
    );
}
