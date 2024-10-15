import { useState, useEffect } from "react";

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

export default function Activity() {
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
  ];

  const [selectedStep, setSelectedStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      //  console.log(window.scrollY)
      // 스크롤 위치에 따라 강조가 바뀌게 스크롤 계산 (..직접함)
      if (scrollPosition < 1800) {
        setSelectedStep(0);
      } else if (scrollPosition >= 1800 && scrollPosition < 1950) {
        setSelectedStep(1);
      } else if (scrollPosition >= 1950 && scrollPosition < 2130) {
        setSelectedStep(2);
      } else if (scrollPosition >= 2130 && scrollPosition < 2350) {
        setSelectedStep(3);
      } else if (scrollPosition >= 2350 && scrollPosition < 2500) {
        setSelectedStep(4);
      } else {
        setSelectedStep(5);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative grid place-items-center mt-52">
      <div className="absolute flex flex-col items-center justify-center z-10 text-white text-center top-20">
        <div className="mb-20 text-4xl mt-96">파트 소개</div>
        <div className=" grid grid-cols-3 gap-6 ">
          <PartCard
            KorTitle={"웹 프론트엔드"}
            EngTitle={"WEB"}
            description={
              "우리는 아름답고 직관적인 웹 경험을 창조해 나가며,\n다양한 의견을 수렴하여 성장하는\n웹사이트를 만들어갑니다."
            }
            icon={WebIcon}
          />
          <PartCard
            KorTitle={"앱 프론트엔드"}
            EngTitle={"APP"}
            description={
              "사용자와의 소통을 통해 다양한 경험을 모아,\n손끝에서 펼쳐지는 매력적인 인터페이스를\n설계하며, 언제 어디서나 편리한 경험을\n제공하는 데 열정을 다합니다."
            }
            icon={AppIcon}
          />
          <PartCard
            KorTitle={"백엔드"}
            EngTitle={"BACKEND"}
            description={
              "데이터를 안전하게 저장하고, 비즈니스 로직을 구현하여\n사용자 요청에 신속하고 정확하게 응답하며, 다양한 기술을\n접목해 안정적인 서비스를 위해 끊임없이 진화합니다."
            }
            icon={BEIcon}
          />
          <PartCard
            KorTitle={"데이터 분석"}
            EngTitle={"DATA ANALYSIS"}
            description={
              "방대한 데이터 속에서 패턴과 인사이트를\n발견하며, 이를 통해 팀의 의사 결정을 지원하고,\n다양한 관점을 통해 더 나은 미래를 설계하는 데 기여합니다."
            }
            icon={DAIcon}
          />
          <PartCard
            KorTitle={"딥러닝"}
            EngTitle={"DEEP LEARNING"}
            description={
              "복잡한 문제를 해결하기 위해 심층 신경망을\n설계하며, 인간의 인지 능력을 모방하여\n세상의 다양한 문제에 도전하고,\n새로운 변화를 일으키는 데 열정을 쏟습니다."
            }
            icon={DLIcon}
          />
          <PartCard
            KorTitle={"디자인"}
            EngTitle={"DESIGN"}
            description={
              "우리는 변화하는 디자인 트렌드에 열정적으로 따라가며,\n다양한 아이디어를 수렴하고,\n사용자 경험을 최우선으로 고려하여,\n아름답고 직관적인 디자인으로 물결을 일으킵니다"
            }
            icon={DEIcon}
          />
        </div>
        <div className="mb-20 text-4xl mt-96">정규 세션 소개</div>
        <StepComponent steps={steps} selectedStep={selectedStep} />
        <div className="mb-20 text-4xl mt-96">AFTER TAVE</div>
        <div className="grid grid-cols-3 gap-6">
          <AfterCard icon={After1} description={"횔동증명서\n발급"} />
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
  );
}
