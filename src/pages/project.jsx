import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Tab from "../components/tab";
import File from "../components/file";

export default function Project() {
  const categories = ["ALL", "연합 프로젝트", "심화 프로젝트"]
  const [selectedFiled, setSelectedFiled] = useState("ALL");
  const [isTabFixed, setIsTabFixed] = useState(false);
  const [projectData, setProjectData] = useState([]);
  

  useEffect(() => {
    async function getProject() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/normal/project`);
        const result = response.data.result;
        setProjectData(result);
        console.log(result);
      } catch (e) {
        console.error("Error fetching project data:", e);
      }
    }
    getProject();
  }, []);

 
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
  const handleFiledChange = field => {
    setSelectedFiled(field);
  };

  const filteredProject = projectData.content?.filter((project) => {
    if (selectedFiled === "ALL") return true;
    if (selectedFiled === "연합 프로젝트") return project.field === "ADVANCED";
    if (selectedFiled === "심화 프로젝트") return project.field === "COLLABORATIVE";
    return false;
  }) || [];

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
                onCategoryChange={handleFiledChange}
              />
            </div>
          </div>
        </div>
        {/* 프로젝트 내용 부분 */}
        <div className="content pb-96">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-12 justify-items-center">
            {filteredProject && filteredProject.length > 0 ? (
        filteredProject.map((data, index) => (
          <File
            key={index}
            type={data.field || "N/A"} 
            title={data.title || "제목 없음"} 
            teamNum={Number(data.generation) || "기수 없음"} 
            teamName={data.teamName || "팀 이름 없음"} 
            description={data.description || "설명 없음"} 
            blogUrl={data.blogUrl || "#"} 
          />
        ))
      ) : (
        <div className="text-gray-500 text-center col-span-full">
          표시할 프로젝트가 없습니다.
        </div>
      )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
