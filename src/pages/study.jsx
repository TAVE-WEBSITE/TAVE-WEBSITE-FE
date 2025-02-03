import { useEffect, useState } from "react";
import Tab from "../components/tab";
import File from "../components/file";
import { getStudy } from "../api/studyApi";
import Wave from  "../assets/images/studyWave.svg"

export default function Study() {
  const categories = ["Web/App", "Backend", "DeepLearning", "DataAnalysis"];
  const categoryMap = {
    "Web/App": "FRONTEND",
    "Backend": "BACKEND",
    "DeepLearning": "DEEPLEARNING",
    "DataAnalysis": "DATAANALYSIS",
  };

  const [selectedCategory, setSelectedCategory] = useState("Web/App");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        // 전체 데이터 한번에 요청 (가급적 큰 pageSize로 설정)
        const studyData = await getStudy(0, 1000); // 페이지 번호 0, 큰 크기 설정
        setResponse(studyData.result.content);
        // console.log(response)
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [selectedCategory]);

  const filteredStudy = response.filter((data) => {
    return (
      data.field === categoryMap[selectedCategory]
    );
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={Wave} className="absolute z-0 md:hidden h-full top-0"/>
      <div className="flex flex-col mt-20 pt-24 pb-12 justify-center items-center break-keep text-center z-10">
        <div className="text-4xl font-bold leading-14 pb-4">
          TAVE의 스터디를 소개합니다
        </div>
        <div className="hidden md:inline font-medium mt-5 text-center text-base">
          자세한 내용이 궁금하다면? 아래의 폴더를 클릭하시면 후기 링크로 연결됩니다.
        </div>
        <div className="md:hidden font-normal mt-10 text-base text-center text-2xl">
          자세한 내용이 궁금하다면?
          <br />
          아래의 폴더를 클릭하시면 후기 링크로 연결됩니다.
        </div>
      </div>
      <div className="w-full max-w-10xl py-5 break-keep sticky top-12 z-20 bg-gradient-to-b from-black from-40% to-transparent flex justify-start md:justify-center px-4">
        <Tab
          category={categories}
          onCategoryChange={handleCategoryChange}
          initialState={0}
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 mt-12 justify-items-center mb-40 z-10">
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
                blogUrl={data.blogUrl}
                topic={data.topic}
              />
            ))}
          </>
        )}
      </div>
      
    </div>
  );
}
