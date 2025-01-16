import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import Growth from "../../assets/icons/Growth";
import Passion from "../../assets/icons/Passion";
import Diversity from "../../assets/icons/Diversity";

// CoreCard 컴포넌트
function CoreCard({ title, description, SvgIcon, className, center }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className={`w-5/6 sm:w-[270px] h-[161px] bg-[#393a40]/50 rounded-[15px] relative border border-[#f7f8fa] border-[0.5px] flex justify-center items-center overflow-hidden
             duration-300 ease-in-out ${center && "bg-[#195BFF]"}`}
      >
        {center ? (
          <div className="text-center text-sm font-medium leading-normal absolute z-20">
            <span className="font-bold text-xl">{title}</span>

            {description}
          </div>
        ) : (
          <div className="text-center body-highlight-1">{title}</div>
        )}

        {React.cloneElement(SvgIcon, {
          className: `absolute transition-transform duration-300 ease-in-out ${
            center ? "scale-125 z-10" : "scale-100 z-[-1]"
          } ${className}`,
          fill: center ? "#12121233" : "#393A40",
        })}
      </div>
    </div>
  );
}

// CoreValueCarousel 컴포넌트
export default function CoreValueCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // 화살표 비활성화
    centerMode: true, // 중앙 정렬
    adaptiveHeight: true, // 높이 자동 조정
    centerPadding: "20px",
    beforeChange: (current, next) => {
      setCurrentSlide(next); // 슬라이드 변경 시 currentSlide 업데이트
    },
  };

  const CoreCardList = [
    {
      title: "열정",
      content: `열정으로 뭉친 TAVE는 새로운 기술을\n탐험하고 혁신의 경계를 넓혀갑니다.`,
      image: <Passion />,
      className: "right-0 bottom-0",
    },
    {
      title: "성장",
      content: `함께 배우고 경험하며, 개인과 팀의 성장\n모두를 이끌어가는 공간입니다.`,
      image: <Growth />,
      className: "",
    },
    {
      title: "다양성",
      content: `다양한 분야의 융합을 통해\n새로운 가능성을 탐색합니다.`,
      image: <Diversity />,
      className: "left-0 bottom-0",
    },
  ];

  return (
    <div className="w-full h-[230px] items-center bg-black-100">
      <Slider {...settings} className="items-center">
        {CoreCardList.map((card, index) => (
          <div key={index} className="flex justify-center items-center">
            <CoreCard
              title={card.title}
              description={<p>{card.content}</p>}
              SvgIcon={card.image}
              className={card.className}
              center={currentSlide === index}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
