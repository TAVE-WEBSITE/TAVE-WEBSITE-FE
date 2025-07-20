import React, { useMemo } from "react";
import StudyFile1 from "../assets/images/StudyFile1.png";
import StudyFile2 from "../assets/images/StudyFile2.png";
import StudyFile3 from "../assets/images/StudyFile3.png";
import ProjectFile1 from "../assets/images/ProjectFile1.png";
import ProjectFile2 from "../assets/images/ProjectFile2.png";
import ProjectFile3 from "../assets/images/ProjectFile3.png";

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

 // 글자 수 제한 함수
const truncateText = (text, maxLength = 19) => {
  if (!text) return "";

  // 영어 포함 여부 확인 (영어가 있으면 더 긴 maxLength 적용)
  const hasEnglish = /[a-zA-Z]/.test(text);
  const adjustedLength = hasEnglish ? maxLength + 6 : maxLength;

  return text.length > adjustedLength ? `${text.slice(0, adjustedLength)}...` : text;
};

  return (
    <div>
      <div
        className="relative w-44 h-[9.5rem] md:w-64 md:h-56 bg-no-repeat cursor-pointer"
        style={backgroundStyle}
        onClick={handleClick}
      >
        <div className="absolute bottom-6 left-0 px-4 text-white">
          <h2 className="text-sm md:text-lg font-bold font-Pretendard break-keep overflow-hidden text-elipsis">
          {truncateText(type === "study" ? topic : description)}
          </h2>
          <p className="text-xs font-normal font-Pretendard mt-1">
            {teamNum}기 {type === "study" ? teamName : title}팀
          </p>
        </div>
      </div>
    </div>
  );
};

export default File;
