import React, { useMemo } from "react";
import StudyFile1 from "../assets/images/StudyFile1.png";
import StudyFile2 from "../assets/images/StudyFile2.png";
import StudyFile3 from "../assets/images/StudyFile3.png";
import ProjectFile1 from "../assets/images/ProjectFile1.png";
import ProjectFile2 from "../assets/images/ProjectFile2.png";
import ProjectFile3 from "../assets/images/ProjectFile3.png";
import ProjectBackImg from "../assets/images/ProjectBackImg.png";

const studyVariants = [StudyFile1, StudyFile2, StudyFile3];
const projectVariants = [ProjectFile1, ProjectFile2, ProjectFile3];

const File = ({ type, title, field, teamNum, teamName, description, blogUrl, topic, imageUrl }) => {
  const backgroundImage = useMemo(() => {
    if (type === "study") {
      return studyVariants[Math.floor(Math.random() * studyVariants.length)];
    } else {
      // 프로젝트인 경우 imageUrl이 있으면 ProjectBackImg 사용, 없으면 기본 이미지 사용
      if (imageUrl) {
        return ProjectBackImg;
      } else {
        return projectVariants[Math.floor(Math.random() * projectVariants.length)];
      }
    }
  }, [type, imageUrl]);

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
    <div className="group">
      <div
        className="relative w-44 h-[9.5rem] md:w-64 md:h-56 bg-no-repeat cursor-pointer"
        style={backgroundStyle}
        onClick={handleClick}
      >
        {type !== "study" && imageUrl && (
          <div className="absolute inset-0 z-10 md:mt-[38px] mt-6">
            <img
              src={imageUrl}
              alt="프로젝트 이미지"
              className="w-44 h-[7.5rem] md:w-64 md:h-[11.6rem] object-cover rounded-[13px] md:rounded-[18px]"
            />
            <div className="absolute bottom-[8px] md:bottom-0 left-0 w-44 h-[6rem] md:w-64 md:h-[8rem] bg-gradient-to-t from-black/80 to-transparent rounded-b-[13px] md:rounded-b-[18px] md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
        <div className={`absolute bottom-6 left-0 px-4 text-white z-30 ${
          type !== "study" && imageUrl ? "md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" : ""
        }`}>
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