import React, { useMemo } from "react";
import ProjectBackImage from "../assets/images/ProjectBack.png";
import StudyFront1 from "../assets/images/StudyFront1.png";
import StudyFront2 from "../assets/images/StudyFront2.png";
import StudyFront3 from "../assets/images/StudyFront3.png";
import Back1 from "../assets/images/Back1.png";
import Back2 from "../assets/images/Back2.png";
import Back3 from "../assets/images/Back3.png";

const studyVariants = [
  { front: StudyFront1, back: Back1 },
  { front: StudyFront2, back: Back2 },
  { front: StudyFront3, back: Back3 },
];

const projectVariants = [
  { front: StudyFront1, back: Back1 },
  { front: StudyFront2, back: Back2 },
  { front: StudyFront3, back: Back3 },
]
const File = ({ type, title, field, teamNum, teamName, description, blogUrl, topic }) => {


  const studyVariant = useMemo(() => {
    return studyVariants[Math.floor(Math.random() * studyVariants.length)];
  }, []);

  const projectVariant = useMemo(() => {
    return projectVariants[Math.floor(Math.random() * studyVariants.length)];
  }, []);

  const backgroundImage = type === "study" ? studyVariant.back : ProjectBackImage;

  const backgroundStyle = type === "study"
  ? {
      backgroundImage: `url(${studyVariant.back})`,
      backgroundSize: "cover",
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
    backgroundImage: `url(${projectVariant.front})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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
        className="relative w-[194px] h-[164px] md:w-[269px] md:h-[230px] bg-no-repeat cursor-pointer"
        style={backgroundStyle}
        onClick={handleClick}
      >
        <div
    className="absolute w-[194px] h-[140px] md:w-[270px] md:h-[195px] mt-7 md:mt-[44px] flex items-center bg-no-repeat justify-center "
    style={frontStyle}
  >
        </div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h2 className="text-sm md:text-lg font-bold font-Pretendard"> {type === "study" ? topic : description}</h2>
          <p className="text-xs font-normal font-Pretendard">{teamNum}기  {type === "study" ? teamName : title}팀</p>
        </div>
      </div>
    </div>
  );
};

export default File;
