import React from "react";
import { ReactComponent as CodeitLogo } from "../assets/images/CodeitLogo.svg";
import { ReactComponent as AlpacoLogo } from "../assets/images/AlpacoLogo.svg";
import { ReactComponent as BBCareerLogo } from "../assets/images/BBCareerLogo.svg";
import { ReactComponent as LetsCareerLogo } from "../assets/images/home/LetsCareerLogo.svg";

//고화질로 변경

export default function Sponsored() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-4 md:gap-6">
        <CodeitLogo className="w-32 h-32 lg:w-[11.5rem] lg:h-[11.5rem]" />
        <AlpacoLogo className="w-32 h-32 lg:w-[11.5rem] lg:h-[11.5rem]" />
        <BBCareerLogo className="w-32 h-32 lg:w-[11.5rem] lg:h-[11.5rem]" />
        <LetsCareerLogo className="w-32 h-32 lg:w-[11.5rem] lg:h-[11.5rem]" />
      </div>
    </>
  );
}
