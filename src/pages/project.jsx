import { useState, useEffect, useCallback, useRef } from "react";
import Tab from "../tab";
import File from "../components/file";

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
  const tabRef = useRef(null); // 탭 상단 고정을 위한 useRef
  const detailRef = useRef(null); //탭 아래 내용
  const [isTabFixed, setIsTabFixed] = useState(false); // useState로 고정 여부 관리
  const [tab, setTab] = useState(0); // 스크롤이 어느 부분에 있는지 계산
  const offset = 60; // 원활한 상단 고정을 위한 조정

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop; // 현재 스크롤 위치
    // 참조 확인 : 둘 중 하나라도 사용할 수 없는 경우 함수 종료
    if (!tabRef.current || !detailRef.current) return;

    // 상단 고정이 될 만큼 스크롤이 됐는지 확인
    if (scrollTop >= tabRef.current.offsetTop - offset) {
      // 스크롤이 충분할 경우 고정
      setIsTabFixed(true);
    } else {
      // 아닌 경우 다시 원래 위치로
      setIsTabFixed(false);
    }

    // 현재 스크롤에 따른 활성화
    if (scrollTop < detailRef.current.offsetTop - offset) {
      // 현재 스크롤이 프로젝트 내용 부분보다 위에있을 경우
      setTab(0);
    } else if (scrollTop >= detailRef.current.offsetTop - offset) {
      // 현재 스크롤이 프로젝트 내용 부분으로 내려갔을 경우
      setTab(1);
    }
  }, [offset]);

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
      <div className="py-[88px] grid place-items-center">
        <div className="text-4xl font-bold leading-[58px] pb-[16px]">
          TAVE의 프로젝트를 소개합니다
        </div>
        <div className="text-base font-medium leading-[20px]">
          자세한 내용이 궁금하다면? 아래 링크를 통해 프로젝트 후기를 볼 수
          있습니다!
        </div>
      </div>
      {/*Tab 컴포넌트 부분 */}
      <div className="product w-full max-w-6xl">
        <div
          className={`tabs-container ${
            isTabFixed
              ? "fixed top-20 z-20 bg-gradient-to-b from-black from-40% to-transparent w-full max-w-6xl" // Add max width
              : ""
          }`}
          ref={tabRef}>
          <div
            className={`tabs ${
              isTabFixed ? "flex justify-center" : "grid place-items-center"
            }`}>
            <div className={`${tab === 0 ? "bold-line py-10" : "py-10"}`}>
              <Tab
                category={categories}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>
        </div>
        {/* 프로젝트 내용 부분 */}
        <div className="content">
          <div ref={detailRef}>
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
        </div>
      </div>
    </div>
  );
}
