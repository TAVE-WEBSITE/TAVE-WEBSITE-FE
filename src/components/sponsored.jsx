import React from "react";
import CodeitLogo from "../assets/images/CodeitLogo.svg";
import AlpacoLogo from "../assets/images/AlpacoLogo.svg";
import BBCareerLogo from "../assets/images/BBCareerLogo.svg";

export default function Sponsored() {
  return (
    <div className="flex flex-row gap-x-16 m-20">
      <img src={CodeitLogo} className="w-32 h-auto"></img>
      <img src={AlpacoLogo} className="w-32 h-auto"></img>
      <img src={BBCareerLogo} className="w-32 h-auto"></img>
    </div>
  );
}
