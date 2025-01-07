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
      setLoading(true); // 로딩
      setError(null); // 에러 초기화
      try {
        const result = await getStudy(pageNum, selectedCategory);
        setResponse(result); // API 응답 데이터 저장
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [pageNum, selectedCategory]);

  /*
    if (loading) {
      return <div>로딩 중...</div>;
    }
  
    if (error) {
      console.log("에러 발생");
      return <div>{error}</div>;
    }


    if () {
      return <div>데이터가 없습니다.</div>;
    }*/

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-12 justify-items-center mb-96">
        {!response?.content?.length || error ? (
          <div>데이터 없음</div>
        ) : (
          <>
            {response.content.map((data, index) => (
              <File
                key={index}
                type={data.field}
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

{
  /*
  

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Tab from "../components/tab";
import File from "../components/file";
import { getStudy } from "../api/studyApi";

export default function Study() {
  const baseURL = "http://3.35.207.95:8080";
  const location = useLocation();
  const { partName } = location.state || {};
  const categories = [
    "ALL",
    "Web/App",
    "Backend",
    "DeepLearning",
    "DataAnalysis",
  ];
  const initialIndex = categories.indexOf(partName);

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [pageNum, setPageNum] = useState(1);
  const [response, setResponse] = useState(null); // API 응답 상태 관리
  //const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [error, setError] = useState(null); // 에러 상태 관리

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getStudy(pageNum, selectedCategory);
        setResponse(result); // API 응답 데이터 저장
      } catch (e) {
        setError(e.message); // 에러 메시지 설정
      }
    }

    fetchData();
  }, [pageNum, selectedCategory]);

  
  */
}
