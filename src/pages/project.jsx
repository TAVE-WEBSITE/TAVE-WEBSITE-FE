import { useState } from "react";

import Tab from "../tab";
import File from "../components/file";

export default function Project() {
  const categories = ["ALL", "연합 프로젝트", "심화 프로젝트"];

  // 프로젝트 더미 데이터
  const fileSet = [
    {
      type: "prooject",
      title: "프로젝트 이름 캬캬 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "연합",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 캬캬 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "연합",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 캬캬 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "연합",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 캬캬 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "심화",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 캬캬 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "심화",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 캬캬 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "심화",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // 카테고리에 따라 필터링
  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  const filteredFileSet = fileSet.filter(file => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "연합 프로젝트") return file.category === "연합";
    if (selectedCategory === "심화 프로젝트") return file.category === "심화";
    return false;
  });

  return (
    <div className="grid place-items-center">
      <div className="py-[88px] grid place-items-center">
        <div className="text-4xl font-bold leading-[58px] pb-[16px]">
          TAVE의 프로젝트를 소개합니다
        </div>
        <div className="text-base font-medium leading-[20px]">
          자세한 내용이 궁금하다면? 아래 링크를 통해 프로젝트 후기를 볼 수
          있습니다!
        </div>
      </div>
      <Tab category={categories} onCategoryChange={handleCategoryChange} />
      {/* 반응형 : 화면 줄여도 컴포넌트 안겹치게 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-[48px]">
        {filteredFileSet.map((data, index) => (
          <File
            key={index}
            type={data.type}
            title={data.title}
            teamNum={data.teamNum}
            teamName={data.teamName}
          />
        
        ))}
      </div>
    </div>
  );
}
