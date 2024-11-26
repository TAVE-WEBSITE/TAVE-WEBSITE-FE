import React from "react";
import { useState, useEffect, useRef, useCallback} from "react";
import { useNavigate } from "react-router-dom";

import PartCard from "../components/partCard";
import StepComponent from "../components/stepComponent";
import AfterCard from "../components/afterCard";

import WebIcon from "../assets/images/WebIcon.svg";
import AppIcon from "../assets/images/AppIcon.svg";
import BEIcon from "../assets/images/BEIcon.svg";
import DAIcon from "../assets/images/DAIcon.svg";
import DLIcon from "../assets/images/DLIcon.svg";
import DEIcon from "../assets/images/DEIcon.svg";

import After1 from "../assets/images/After1.svg";
import After2 from "../assets/images/After2.svg";
import After3 from "../assets/images/After3.svg";

import ActivityBack from "../assets/images/ActivityBack.jpg";

export default function Activity() {
  const navigate = useNavigate();
  const steps = [
    {
      title: "OT",
      description: "새로운 기수를 시작하며, 다양한 활동 방법을 소개하는 세션",
    },
    {
      title: "MT",
      description: "팀 빌딩이 이루어지기 전, 다른 TAVY들을 알아가는 세션",
    },
    {
      title: "만남의 장",
      description: "TAVE만의 노하우가 들어간 팀 빌딩 세션",
    },
    {
      title: "테버랜드",
      description: "OB와 YB가 다양한 콘텐츠 내에서 활동하며 네트워킹하는 세션",
    },
    {
      title: "전반기 시상식",
      description: "전반기 동안 스터디한 결과를 공유하고 시상하는 세션",
    },
    {
      title: "테런데이",
      description: "다양한 멘토들에게 직접 프로젝트 피드백을 받을 수 있는 세션",
    },
    {
      title: "OB 강연",
      description:
        "IT 업계 현직자 OB분들을 초청하여, 인사이트를 얻을 수 있는 세션",
    },
    {
      title: "테이브의 밤",
      description: "매 회 다른 컨셉을 두고, 전 기수가 모이는 네트워킹 센터",
    },
    {
      title: "TAVE 컨퍼런스",
      description:
        "후반기 동안 개발한 후반기 프로젝트를 공유하고 시상하는 세션",
    },
  ];

  const [selectedStep, setSelectedStep] = useState(0);
  const stepRefs = useRef(steps.map(() => React.createRef()));

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    stepRefs.current.forEach((ref, index) => {
      const element = ref.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;

        // 뷰포트의 중앙에 위치하는지 계산
        if (
          scrollPosition >= elementCenter - rect.height / 2 &&
          scrollPosition <= elementCenter + rect.height / 2
        ) {
          setSelectedStep(index);
        }
      }
    });
  }, [stepRefs, setSelectedStep]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);


  const onPartClick = name => {
    let partName = name;
    if (name === "WEB" || name === "APP") {
      partName = "Web/App";
    }
    console.log("Navigating to /study with partName:", partName); // 로그로 확인
    navigate("/study", { state: { partName } });
  };

  return (
    <div>
      <div className="relative h-[800px]">
        <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
        <img
          src={ActivityBack}
          alt="ActivityBack"
          className="absolute object-cover w-full h-full z-10"
        />
      </div>
      <div className="absolute z-30 flex flex-col gap-[60px] items-center px-4 w-full  top-[640px]">
        <div className="text-[40px] font-bold">모집 대상</div>
        <div className="px-[188px] py-[30px] bg-[#232323] rounded-[20px]">
          <div className="text-center text-xl font-bold">
            다양성을 존중하며 협력하는 IT에 관심있는 대학생 누구나 지원
            가능합니다.
          </div>
        </div>
      </div>

      <div className="relative flex flex-col justify-center w-full px-4 mx-auto lg:w-4/5 mt-12">
        <div className="flex flex-col items-center justify-center text-center w-full ">
          <div className="mb-20 text-4xl mt-96">파트 소개</div>
          <div className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-6 max-w-[1318px]">
            <PartCard
              KorTitle={"웹 프론트엔드"}
              EngTitle={"WEB"}
              description={
                "우리는 아름답고 직관적인 웹 경험을 창조해 나가며, 다양한 의견을 수렴하여 성장하는 웹사이트를 만들어갑니다."
              }
              icon={WebIcon}
              onClick={() => onPartClick("WEB")}
            />
            <PartCard
              KorTitle={"앱 프론트엔드"}
              EngTitle={"APP"}
              description={
                "사용자와의 소통을 통해 다양한 경험을 모아, 손끝에서 펼쳐지는 매력적인 인터페이스를 설계하며, 언제 어디서나 편리한 경험을 제공하는 데 열정을 다합니다."
              }
              icon={AppIcon}
              onClick={() => onPartClick("APP")}
            />
            <PartCard
              KorTitle={"백엔드"}
              EngTitle={"BACKEND"}
              description={
                "데이터를 안전하게 저장하고, 비즈니스 로직을 구현하여 사용자 요청에 신속하고 정확하게 응답하며, 다양한 기술을 접목해 안정적인 서비스를 위해 끊임없이 진화합니다."
              }
              icon={BEIcon}
              onClick={() => onPartClick("Backend")}
            />
            <PartCard
              KorTitle={"데이터 분석"}
              EngTitle={"DATA ANALYSIS"}
              description={
                "방대한 데이터 속에서 패턴과 인사이트를 발견하며, 이를 통해 팀의 의사 결정을 지원하고, 다양한 관점을 통해 더 나은 미래를 설계하는 데 기여합니다."
              }
              icon={DAIcon}
              onClick={() => onPartClick("DataAnalysis")}
            />
            <PartCard
              KorTitle={"딥러닝"}
              EngTitle={"DEEP LEARNING"}
              description={
                "복잡한 문제를 해결하기 위해 심층 신경망을 설계하며, 인간의 인지 능력을 모방하여 세상의 다양한 문제에 도전하고, 새로운 변화를 일으키는 데 열정을 쏟습니다."
              }
              icon={DLIcon}
              onClick={() => onPartClick("DeepLearning")}
            />
            <PartCard
              KorTitle={"디자인"}
              EngTitle={"DESIGN"}
              description={
                "우리는 변화하는 디자인 트렌드에 열정적으로 따라가며, 다양한 아이디어를 수렴하고, 사용자 경험을 최우선으로 고려하여, 아름답고 직관적인 디자인으로 물결을 일으킵니다"
              }
              icon={DEIcon}
            />
          </div>

          <div className="mb-20 text-4xl mt-96 ">정규 세션 소개</div>
          <StepComponent
      steps={steps}
      selectedStep={selectedStep}
      setSelectedStep={setSelectedStep}
    />

          <div className="mb-20 text-4xl mt-96">AFTER TAVE</div>
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-1 md:grid-cols-3 gap-6 w-full px-6 max-w-[1318px]  mb-52">
            <AfterCard icon={After1} description={"활동증명서\n발급"} />
            <AfterCard
              icon={After2}
              description={"우수 스터디 및 프로젝트\n시상 및 발급"}
            />

            <AfterCard
              icon={After3}
              description={"다양한 분야의 OB들과\n네트워킹"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
