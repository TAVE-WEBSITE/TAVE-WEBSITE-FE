import React, { useMemo } from "react";
import ProjectBackImage from "../assets/images/ProjectBack.png";
import StudyFront1 from "../assets/images/StudyFront1.svg";
import StudyFront2 from "../assets/images/StudyFront2.svg";
import StudyFront3 from "../assets/images/StudyFront3.svg";
import Back1 from "../assets/images/Back1.png";
import Back2 from "../assets/images/Back2.png";
import Back3 from "../assets/images/Back3.png";

const studyVariants = [
  { front: StudyFront1, back: Back1 },
  { front: StudyFront2, back: Back2 },
  { front: StudyFront3, back: Back3 },
];

const File = ({ type, title, field, teamNum, teamName, description, blogUrl }) => {


  const studyVariant = useMemo(() => {
    return studyVariants[Math.floor(Math.random() * studyVariants.length)];
  }, []);

  const backgroundImage = type === "study" ? studyVariant.back : ProjectBackImage;

  const backgroundStyle = type === "study"
  ? {
      backgroundImage: `url(${studyVariant.back})`,
      backgroundSize: "contain",
      backgroundPosition: "center"
    }
  : {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    };

const frontStyle = type === "study"
  ? {
      backgroundImage: `url(${studyVariant.front})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }
  : {
      background: "linear-gradient(180deg, rgba(89, 137, 255, 1), rgba(59, 80, 145, 1))",
      borderRadius: "20px 20px 8px 8px"
    };

  const handleClick = () => {
    if (blogUrl) {
      window.open(blogUrl, "_blank");
    } else {
      console.warn("blogUrl이 설정되지 않았습니다.");
    }
  };

  return (
    <div>
      <div
        className="relative w-[269px] h-[230px] bg-no-repeat cursor-pointer"
        style={backgroundStyle}
        onClick={handleClick}
      >
        <div
    className="absolute w-[270px] h-[195px] mt-[44px] flex items-center justify-center "
    style={frontStyle}
  >
        </div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h2 className="text-lg font-bold font-Pretendard">{title}</h2>
          <p className="font-light font-Pretendard">{teamNum}기 {teamName}팀</p>
        </div>
      </div>
    </div>
  );
};

export default File;
