import React, { useMemo } from "react";
import StudyFile1 from "../assets/images/StudyFile1.svg";
import StudyFile2 from "../assets/images/StudyFile2.svg";
import StudyFile3 from "../assets/images/StudyFile3.svg";
import ProjectFile1 from "../assets/images/ProjectFile1.svg";
import ProjectFile2 from "../assets/images/ProjectFile2.svg";
import ProjectFile3 from "../assets/images/ProjectFile3.svg";

const studyVariants = [StudyFile1, StudyFile2, StudyFile3];
const projectVariants = [ProjectFile1, ProjectFile2, ProjectFile3];

const File = ({ type, title, field, teamNum, teamName, description, blogUrl, topic }) => {
  const backgroundImage = useMemo(() => {
    if (type === "study") {
      return studyVariants[Math.floor(Math.random() * studyVariants.length)];
    } else {
      return projectVariants[Math.floor(Math.random() * projectVariants.length)];
    }
  }, [type]);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
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
        className="relative w-48 h-[10.5rem] md:w-64 md:h-56 bg-no-repeat cursor-pointer"
        style={backgroundStyle}
        onClick={handleClick}
      >
        <div className="absolute bottom-0 left-0 px-4 py-8 text-white">
          <h2 className="text-sm md:text-lg font-bold font-Pretendard break-keep">
            {type === "study" ? topic : description}
          </h2>
          <p className="text-xs font-normal font-Pretendard">
            {teamNum}기 {type === "study" ? teamName : title}팀
          </p>
        </div>
      </div>
    </div>
  );
};

export default File;
