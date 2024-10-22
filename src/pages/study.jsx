import { useState } from "react";
import { useLocation } from "react-router-dom";
import Tab from "../components/tab";
import File from "../components/file";

export default function Study() {
  const location = useLocation();
  // 활동 페이지에서 props 전달
  const { partName } = location.state || {};
  // 초기 상태로 해당 파트 설정
  {
    /* categories 목록 */
  }
  const categories = [
    "ALL",
    "Web/App",
    "Backend",
    "DeepLearning",
    "DataAnalysis",
  ];
  const initialIndex = categories.indexOf(partName);

  {
    /* File props 더미 데이터*/
  }
  const fileSet = [
    {
      type: "study",
      title: "스터디 이름 캬캬 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "FE",
    },
    {
      type: "study",
      title: "스터디 이름 아아 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "BE",
    },
    {
      type: "study",
      title: "스터디 이름 고고 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "DL",
    },
    {
      type: "study",
      title: "스터디 이름 냐냐 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "DA",
    },
    {
      type: "study",
      title: "스터디 이름 먀먀 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "FE",
    },
    {
      type: "study",
      title: "스터디 이름 바바 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "BE",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // 카테고리에 따라 필터링
  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  const filteredFileSet = fileSet.filter(file => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "Web/App") return file.category === "FE";
    if (selectedCategory === "Backend") return file.category === "BE";
    if (selectedCategory === "DeepLearning") return file.category === "DL";
    if (selectedCategory === "DataAnalysis") return file.category === "DA";
    return false;
  });

  {
    /* 추후에 스터디 종류별로 보여지는 데이터 다르게 작성
    props바꾸기 or 데이터 받을 때 web, backend 등 카테고리 받기 */
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col mt-20 py-[88px] justify-center items-center break-keep text-center">
        <div className="text-4xl font-bold leading-[58px] pb-[16px]">
          TAVE의 스터디를 소개합니다
        </div>
        <div className="font-medium leading-[20px]">
          자세한 내용이 궁금하다면? 아래의 링크를 통해 스터디 후기를 보러
          가세요!
        </div>
      </div>
      <div className="px-5  break-keep text-center ">
        <Tab category={categories} onCategoryChange={handleCategoryChange} initialState={initialIndex}/>
      </div>

      <div className="grid grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex flex-row gap-x-10 gap-y-6 pt-[48px] mt-12 justify-items-center">
        {filteredFileSet.map((data, index) => {
          return (
            <File
              type={data.type}
              title={data.title}
              teamNum={data.teamNum}
              teamName={data.teamName}
            />
          );
        })}
      </div>
    </div>
  );
}
