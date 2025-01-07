import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectBackImage from "../assets/images/ProjectBack.png";
import StudyBackImage from "../assets/images/StudyBack.png";

const File = ({ field, title, generation, teamName, description, blogUrl }) => {
  const navigate = useNavigate();
  const backgroundImage = field === "study" ? StudyBackImage : ProjectBackImage;

  const backgroundColor =
    field === "study"
      ? "linear-gradient(180deg, rgba(76, 76, 76, 1), rgba(27, 27, 27, 1))"
      : "linear-gradient(180deg, rgba(89, 137, 255, 1), rgba(59, 80, 145, 1))";

  // 외부 링크라서 window.location.href 사용용
      const handleClick = () => {
        if (blogUrl) {
          window.location.href = blogUrl;
        } else {
          console.warn("blogUrl이 설정되지 않았습니다.");
        }
      };
  
  return (
    <div>
      <div
        className="relative w-[271px] h-[230px] bg-no-repeat cursor-pointer"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        onClick={handleClick}>
        <div
          className="absolute w-[271px] h-[195px] mt-[36px]"
          style={{
            background: backgroundColor,
            borderRadius: "20px 20px 8px 8px",
          }}></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h2 className="text-lg font-bold font-Pretendard">{title}</h2>
          <p className="font-light font-Pretendard">
            {generation}기 {teamName}팀
          </p>
        </div>
      </div>
    </div>
  );
};

export default File;
