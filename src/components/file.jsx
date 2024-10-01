import React from "react";
import ProjectBackImage from "../assets/images/ProjectBack.png";
import StudyBackImage from "../assets/images/StudyBack.png";

const File = ({ type, title, teamNum, teamName }) => {
  const backgroundImage = type === "study" ? StudyBackImage : ProjectBackImage;

  const backgroundColor =
    type === "study"
      ? "linear-gradient(180deg, rgba(76, 76, 76, 1), rgba(27, 27, 27, 1))"
      : "linear-gradient(180deg, rgba(89, 137, 255, 1), rgba(59, 80, 145, 1))";

  return (
    <div>
      <div
        className="relative w-[271px] h-[230px] bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div
          className="absolute w-[271px] h-[195px] mt-[36px]"
          style={{
            background: backgroundColor,
            borderRadius: "20px 20px 8px 8px",
          }}
        ></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h2 className="text-lg font-bold font-Pretendard">{title}</h2>
          <p className="font-light font-Pretendard">{teamNum}기 {teamName}팀</p>
        </div>
      </div>
    </div>
  );
};

export default File;
