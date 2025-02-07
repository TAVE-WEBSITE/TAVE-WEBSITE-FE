import React from 'react';
import { ReactComponent as CodeitLogo } from '../assets/images/CodeitLogo.svg';
import { ReactComponent as AlpacoLogo } from '../assets/images/AlpacoLogo.svg';
import { ReactComponent as BBCareerLogo } from '../assets/images/BBCareerLogo.svg';
import {ReactComponent as LetsCareerLogo} from "../assets/images/home/LetsCareerLogo.svg";

//고화질로 변경

export default function Sponsored() {
    return (
        <>
        <div className="grid grid-cols-2 md:grid-cols-4 maw-w-11/12 justify-items-center gap-4 md:gap-6">            
            <CodeitLogo className='w-36 h-36 md:w-52 md:h-52'/>
            <AlpacoLogo className='w-36 h-36 md:w-52 md:h-52' />
            <BBCareerLogo className='w-36 h-36 md:w-52 md:h-52' />
           <LetsCareerLogo className='w-36 h-36 md:w-52 md:h-52'/>
        </div>
        
        </>
    );
}
