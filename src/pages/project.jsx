import { useState, useEffect, useCallback, useRef } from "react";
import Tab from "../components/tab";
import File from "../components/file";
import Footer from "../components/footer";

export default function Project() {
  const categories = ["ALL", "연합 프로젝트", "심화 프로젝트"];

  // 프로젝트 더미 데이터
  const fileSet = [
    {
      type: "prooject",
      title: "프로젝트 이름 연합 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "연합",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 연합 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "연합",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 연합 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "연합",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 심화 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "심화",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 연합 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "연합",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 심화 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "심화",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 연합 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "연합",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 심화 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "심화",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 연합 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "연합",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 심화 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "심화",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 심화 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "심화",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 심화 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "심화",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 연합 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "연합",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 연합 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "연합",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 연합 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "연합",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 심화 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "심화",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 심화 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "심화",
    },
    {
      type: "prooject",
      title: "프로젝트 이름 심화 아기하마",
      teamNum: 14,
      teamName: "아기하마",
      category: "심화",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const [isTabFixed, setIsTabFixed] = useState(false); // useState로 고정 여부 관리

  const handleScroll = useCallback(() => {
    // 스크롤 위치가 상단 고정 위치를 넘어섰을 때만 상태 변경
    const shouldBeFixed = window.scrollY >= 190;

    // 상태가 다를 때만 업데이트
    if (shouldBeFixed !== isTabFixed) {
      setIsTabFixed(shouldBeFixed);
    }
  }, [isTabFixed]);

  // 스크롤 이벤트 리스너
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      // 스크롤 이벤트 제거 (성능 저하 방지)
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
      <div className="mt-20 py-24 grid place-items-center w-4/5 break-keep text-center">
        <div className="text-4xl font-bold leading-14 pb-4 ">
          TAVE의 프로젝트를 소개합니다
        </div>
        <div className="text-base font-medium leading-14">
          자세한 내용이 궁금하다면? 아래 링크를 통해 프로젝트 후기를 볼 수
          있습니다!
        </div>
      </div>
      {/*Tab 컴포넌트 부분 */}
      <div className="product w-full max-w-6xl">
        <div
          className={`tabs-container relative px-5  break-keep text-center ${
            isTabFixed
              ? "sticky top-20 z-20 bg-gradient-to-b from-black from-40% to-transparent w-full max-w-6xl"
              : ""
          }`}>
          <div
            className={`tabs ${
              isTabFixed ? "flex justify-center" : "grid place-items-center"
            }`}>
            <div className="py-10">
              <Tab
                category={categories}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>
        </div>
        {/* 프로젝트 내용 부분 */}
        <div className="content pb-96">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-12 justify-items-center">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
