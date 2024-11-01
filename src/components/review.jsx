import ReviewIcon from "../assets/images/ReviewIcon.svg";
import React, { useState, useRef, useEffect } from "react";

const reviews = [
  {
    id: 0,
    name: "테이원",
    role: "13기 DA / 카카오",
    content:
      "“ 테이브에서의 활동과 경험들이 실무에서 많은 도움이 되었습니다. 이븐하게 노트북 닦는 법. 가나다라 마바사 아자차카타파하. ”",
  },
  {
    id: 1,
    name: "테이투",
    role: "13기 DA / 카카오",
    content:
      "“ 또 다른 경험은 실제로 업무에 큰 도움이 되었습니다. 이 부분은 정말 유익했어요.”",
  },
  {
    id: 2,
    name: "테이쓰",
    role: "13기 DA / 카카오",
    content:
      "“ 테이브에서의 활동과 경험들이 실무에서 많은 도움이 되었습니다. 이븐하게 노트북 닦는 법. 가나다라 마바사 아자차카타파하. ”",
  },
  {
    id: 3,
    name: "테이포",
    role: "13기 DA / 카카오",
    content:
      "“ 또 다른 경험은 실제로 업무에 큰 도움이 되었습니다. 이 부분은 정말 유익했어요.”",
  },
];

export default function Review() {
  const [page, setPage] = useState(0);
  const sliderWrapRef = useRef(null);
  const max = 1; // 나중에 데이터 받고 설정
  const sliderWrap = document.getElementById("sliderWrap");
  //받아오는 데이터 2로 나눈 몫에 따라 보여줄 데이터 결정하기
  //const sliderWrap = document.querySelector(".slider__wrap");
  //const sliderImg = sliderWrap.querySelector(".slider__img"); //보여지는 영역
  //const sliderInner = sliderWrap.querySelector(".slider__inner"); //움직이는 영역
  //const slider = sliderWrap.querySelectorAll(".slider");

  useEffect(() => {
    if (sliderWrapRef.current) {
      //setTotalWidth(sliderWrapRef.current.offsetWidth);
    }
  }, []);

  const handleLeftClick = () => {
    if (page - 1 < 0) {
      setPage(max);
    } else {
      setPage(page - 1);
    }
  };
  const handleRightClick = () => {
    if (page + 1 > max) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };
  // style={{ transform: `translateX(-${page * 120}%)` }}

  return (
    <div className="flex flex-row gap-x-20 mt-[100px]">
      <img
        src={ReviewIcon}
        className="cursor-pointer w-18 h-auto"
        onClick={handleLeftClick}
      ></img>
      <div
        className="flex flex-col gap-y-12"
        id="sliderWrap"
        ref={sliderWrapRef}
      >
        <div className="flex-grow flex justify-start">
          <div
            className="relative text-white text-left p-8 rounded-lg w-[63%] shadow-lg"
            style={{
              background: "var(--tinted-base, rgba(255, 255, 255, 0.07))",
            }}
          >
            <p className="text-2xl mb-6">
              {reviews[page * 2].name}
              <span className="text-gray-400 ml-2">
                {reviews[page * 2].role}
              </span>
            </p>
            <div className="text-[20px] leading-8">
              {reviews[page * 2].content}
            </div>
            <div className="absolute bottom-[-10px] left-10 w-0 h-0 border-l-20 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800"></div>
          </div>
        </div>

        <div className="flex-grow flex justify-end">
          <div
            className="relative text-white text-left p-8 rounded-lg w-[63%] shadow-lg"
            style={{
              background: "var(--tinted-base, rgba(255, 255, 255, 0.07))",
            }}
          >
            <p className="text-2xl mb-6">
              {reviews[page * 2 + 1].name}
              <span className="text-gray-400 ml-2">
                {reviews[page * 2 + 1].role}
              </span>
            </p>
            <div className="text-[20px] leading-8">
              {reviews[page * 2 + 1].content}
            </div>
            <div className="absolute bottom-[-10px] right-10 w-0 h-0 border-l-8 border-r-20 border-t-8 border-l-transparent border-r-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>
      <img
        src={ReviewIcon}
        className="cursor-pointer w-18 h-auto scale-x-[-1]"
        onClick={handleRightClick}
      ></img>
    </div>
  );
}
