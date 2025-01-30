import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Tab from "../components/tab";
import File from "../components/file";
import { getStudy } from "../api/studyApi";

export default function Study() {
  const location = useLocation();
  const { partName } = location.state || {};
  const categories = [
    "ALL",
    "Web/App",
    "Backend",
    "DeepLearning",
    "DataAnalysis",
  ];

  const categoryMap = {
    "ALL": "",
    "Web/App": "FRONTEND",
    "Backend": "BACKEND",
    "DeepLearning": "DEEP_LEARNING",
    "DataAnalysis": "DATA_ANALYSIS",
  };
  const initialIndex = categories.indexOf(partName);

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [pageNum, setPageNum] = useState(1);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPageNum(1); // 카테고리가 바뀔 때 페이지 초기화
    setResponse(null); // 기존 데이터 초기화
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const apiCategory = categoryMap[selectedCategory]; // 매핑된 카테고리 값 사용
        const result = await getStudy(pageNum, apiCategory);
        setResponse(result);
        console.log(apiCategory);
        console.log(result);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [pageNum, selectedCategory]);

  const filteredStudy = (response?.content || []).filter((data) => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "Web/App") return data.field === "FRONTEND";
    if (selectedCategory === "Backend") return data.field === "BACKEND";
    if (selectedCategory === "DeepLearning") return data.field === "DEEP_LEARNING";
    if (selectedCategory === "DataAnalysis") return data.field === "DATA_ANALYSIS";
    
    return false;
  });
  


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col mt-20 py-24 justify-center items-center break-keep text-center">
        <div className="text-4xl font-bold leading-14 pb-4">
          TAVE의 스터디를 소개합니다
        </div>
        <div className="font-medium leading-14">
          자세한 내용이 궁금하다면 ? 아래의 링크를 통해 스터디 후기를 볼 수
          있습니다!
        </div>
      </div>
      <div className="w-full max-w-10xl py-5 break-keep sticky top-20 z-20 bg-gradient-to-b from-black from-40% to-transparent flex justify-center">
        <Tab category={categories} onCategoryChange={handleCategoryChange} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 mt-12 justify-items-center mb-96">
        {loading ? (
          <div>로딩 중...</div>
        ) : error ? (
          <div>에러 발생: {error}</div>
        ) : !filteredStudy.length ? (
          <div>데이터 없음</div>
        ) : (
          <>
            {filteredStudy.map((data, index) => (
              <File
                key={index}
                type="study"
                field={data.field}
                title={data.topic}
                teamNum={data.generation}
                teamName={data.teamName}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}