import PartCard from "./partCard";
import WebIcon from "../../assets/images/WebIcon.svg";
import AppIcon from "../../assets/images/AppIcon.svg";
import BEIcon from "../../assets/images/BEIcon.svg";
import DAIcon from "../../assets/images/DAIcon.svg";
import DLIcon from "../../assets/images/DLIcon.svg";
import DEIcon from "../../assets/images/DEIcon.svg";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import React, { useState } from "react";
import Slider from "react-slick";

export default function Part() {
  const navigate = useNavigate();
  const onPartClick = (name) => {
    let partName = name;
    console.log("Navigating to /study with partName:", partName); // 로그로 확인
    navigate("/study", { state: { partName } });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // 화살표 비활성화
    centerMode: true, // 중앙 정렬
    adaptiveHeight: true, // 높이 자동 조정
    centerPadding: "0",
  };

  const partCards = [
    {
      KorTitle: "웹 프론트엔드",
      EngTitle: "WEB",
      description:
        "우리는 아름답고 직관적인 웹 경험을 창조해 나가며, 다양한 의견을 수렴하여 성장하는 웹사이트를 만들어갑니다.",
      icon: WebIcon,
      onClick: () => onPartClick("Frontend"),
    },
    {
      KorTitle: "앱 프론트엔드",
      EngTitle: "APP",
      description:
        "사용자와의 소통을 통해 다양한 경험을 모아, 손끝에서 펼쳐지는 매력적인 인터페이스를 설계하며, 언제 어디서나 편리한 경험을 제공하는 데 열정을 다합니다.",
      icon: AppIcon,
      onClick: () => onPartClick("Frontend"),
    },
    {
      KorTitle: "백엔드",
      EngTitle: "BACKEND",
      description:
        "데이터를 안전하게 저장하고, 비즈니스 로직을 구현하여 사용자 요청에 신속하고 정확하게 응답하며, 다양한 기술을 접목해 안정적인 서비스를 위해 끊임없이 진화합니다.",
      icon: BEIcon,
      onClick: () => onPartClick("Backend"),
    },
    {
      KorTitle: "데이터 분석",
      EngTitle: "DATA ANALYSIS",
      description:
        "방대한 데이터 속에서 패턴과 인사이트를 발견하며, 이를 통해 팀의 의사 결정을 지원하고, 다양한 관점을 통해 더 나은 미래를 설계하는 데 기여합니다.",
      icon: DAIcon,
      onClick: () => onPartClick("DataAnalysis"),
    },
    {
      KorTitle: "딥러닝",
      EngTitle: "DEEP LEARNING",
      description:
        "복잡한 문제를 해결하기 위해 심층 신경망을 설계하며, 인간의 인지 능력을 모방하여 세상의 다양한 문제에 도전하고, 새로운 변화를 일으키는 데 열정을 쏟습니다.",
      icon: DLIcon,
      onClick: () => onPartClick("DeepLearning"),
    },
    {
      KorTitle: "디자인",
      EngTitle: "DESIGN",
      description:
        "우리는 변화하는 디자인 트렌드에 열정적으로 따라가며, 다양한 아이디어를 수렴하고, 사용자 경험을 최우선으로 고려하여, 아름답고 직관적인 디자인으로 물결을 일으킵니다",
      icon: DEIcon,
    },
  ];

  return (
    <div className="flex-col justify-center items-center">
      <div className="mb-20 text-4xl mt-96">파트 소개</div>

      {/* sm 이상 화면에서 PartCard만 보이도록 설정 */}
      <div className="hidden md:grid justify-center md:grid-cols-3 gap-6 w-full px-6 max-lg:scale-90">
        {partCards.map((card, index) => (
          <PartCard
            KorTitle={card.KorTitle}
            EngTitle={card.EngTitle}
            description={card.description}
            icon={card.icon}
            onClick={card.onClick}
          />
        ))}
      </div>

      {/* sm 이하 화면에서 Slider만 보이도록 설정 */}
      <div className="md:hidden items-center justify-center w-full px-10 h-[160px]">
        <Slider {...settings} className="flex justify-center items-center">
          {partCards.map((card, index) => (
            <div
              key={index}
              className="w-full flex justify-center items-center mx-2"
            >
              <PartCard
                KorTitle={card.KorTitle}
                EngTitle={card.EngTitle}
                description={card.description}
                icon={card.icon}
                onClick={card.onClick}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
