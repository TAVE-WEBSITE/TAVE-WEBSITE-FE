import "../styles/global.css";
import History from "../components/history";
import Sponsored from "../components/sponsored";
import Review from "../components/review";
import LogoTave from "../assets/images/LogoTave.svg";
import CoreCard from "../components/home/coreCard.jsx";
import Growth from "../assets/icons/Growth.jsx";
import Passion from "../assets/icons/Passion.jsx";
import Diversity from "../assets/icons/Diversity.jsx";
import styles from "../styles/home.module.css";
import CoreValueCarousel from "../components/home/coreValueCarousel.jsx";
import ArrowDown from "../assets/icons/ArrowDown.svg";
import { useEffect, useState } from "react";
import { useRef } from "react";
import wave from "../assets/images/home/wave.svg";
import wave1 from "../assets/images/home/wave1.svg";
import wave2 from "../assets/images/home/wave2.svg";
import wave3 from "../assets/images/home/wave3.svg";
import wave4 from "../assets/images/home/wave4.svg";
import wave5 from "../assets/images/home/wave5.svg";

//반복되는 부분 모듈화
const DIVIDER_HEIGHT = 5; // 페이지 구분선 높이
const SCROLL_DELAY = 800; // 스크롤 이벤트 간격 (ms)
const SCROLL_DURATION = 1000; // 스크롤 애니메이션 지속 시간 (ms)
const SCROLL_THRESHOLD = 50; // **작은 움직임 무시, 50px 이상 움직이면 동작**

export default function HomeTest() {
  const outerDivRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const smoothScrollTo = (targetY) => {
      const startY = outerDivRef.current.scrollTop;
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / SCROLL_DURATION, 1); // 0~1 사이 비율 계산

        // 부드러운 스크롤을 위한 easing 함수
        const easeInOutCubic =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        outerDivRef.current.scrollTop =
          startY + (targetY - startY) * easeInOutCubic;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          setIsScrolling(false);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const handleScroll = (deltaY) => {
      if (isScrolling || Math.abs(deltaY) < SCROLL_THRESHOLD) return; // **작은 움직임 무시**

      const pageHeight = window.innerHeight;
      let nextPage = currentPage;

      if (deltaY > 0) {
        // 아래로 스크롤
        nextPage = Math.min(currentPage + 1, 5);
      } else {
        // 위로 스크롤
        nextPage = Math.max(currentPage - 1, 0);
      }

      setIsScrolling(true);
      setCurrentPage(nextPage);
      smoothScrollTo(nextPage * (pageHeight + DIVIDER_HEIGHT));

      setTimeout(() => {
        setIsScrolling(false);
      }, SCROLL_DELAY);
    };

    const wheelHandler = (e) => {
      e.preventDefault();
      handleScroll(e.deltaY);
    };

    let touchStartY = 0;

    const touchStartHandler = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const touchEndHandler = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const touchDiff = touchStartY - touchEndY;
      if (Math.abs(touchDiff) >= SCROLL_THRESHOLD) {
        handleScroll(touchDiff);
      }
    };

    const outerDiv = outerDivRef.current;
    outerDiv.addEventListener("wheel", wheelHandler, { passive: false });
    outerDiv.addEventListener("touchstart", touchStartHandler);
    outerDiv.addEventListener("touchend", touchEndHandler);

    return () => {
      outerDiv.removeEventListener("wheel", wheelHandler);
      outerDiv.removeEventListener("touchstart", touchStartHandler);
      outerDiv.removeEventListener("touchend", touchEndHandler);
    };
  }, [currentPage, isScrolling]);

  return (
    //overflow-y-auto
    <div className="outer relative mx-auto break-keep" ref={outerDivRef}>
      <div className={styles.gradientWrapper} />
      <div className="flex flex-col justify-center items-center w-full md:px-20 px-5">
        {/* 첫번째 화면 */}
        <div
          className="flex flex-col items-center h-screen justify-center w-screen"
          style={{
            backgroundImage: `url(${wave1})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="md:text-2xl text-base font-light mt-20">
            The new technology wave,
          </div>
          <img src={LogoTave} className="w-[301px]" alt="taveLogo"></img>
          <div className="hidden md:inline font-medium mt-10 text-center md:title-2">
            기술의 물결 속에서 함께 성장하는 곳, TAVE
          </div>
          <div className="md:hidden font-medium mt-10 text-center text-2xl">
            기술의 물결 속에서 함께
            <br />
            성장하는 곳, TAVE
          </div>
          <button
            className="md:hidden mt-20 py-3.5 px-4 text-white text-center font-semibold text-[18px] "
            style={{
              borderRadius: "12px",
              background:
                "linear-gradient(102deg, #6D3CFF -2.19%, #1A5BFF 100%), linear-gradient(262deg, #64B4FF 16.37%, #1A5BFF 103.22%, #003BD0 196.21%, #1629B8 283.61%)",
              fontFamily: "Pretendard",
            }}
          >
            지금 바로 지원하기
          </button>
        </div>

        {/* 웹에서는 이 문구가 따로 */}
        <div
          className="hidden md:flex h-screen w-full flex-col items-center justify-center w-screen"
          style={{
            backgroundImage: `url(${wave2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center md:title-1 text-xl font-semibold leading-6 tracking-[-0.9px]">
            다양한 분야와의 융합을 통해 미래를 선도하는
            <br /> IT 연합 동아리, TAVE를 소개합니다
          </div>
        </div>

        {/*두번째 화면 */}
        <div className="h-screen w-full flex flex-col items-center justify-center max-md:mt-14 ">
          <p className="md:hidden text-center text-lg font-semibold leading-8 tracking-[-0.9px] ">
            다양한 분야와의 융합을 통해
            <br />
            미래를 선도하는 IT 연합 동아리,
            <br />
            TAVE를 소개합니다
          </p>
          <img src={ArrowDown} className="md:hidden  mt-8" />
          <div className="flex flex-col items-center md:gap-4">
            <div className=" md:text-4xl font-bold title-1 max-md:text-[26px]">
              Core Value
            </div>
            <div className="md:text-xl font-light body-light font-Pretendard max-md:text-[16px]">
              TAVE의 핵심가치를 소개합니다
            </div>
          </div>
          <div className="hidden md:scale-75 lg:scale-95  md:flex gap-4 mt-12 px-4 md:gap-12 md:mt-[100px] md:px-[148px]">
            <CoreCard
              title="열정"
              description={
                <p>
                  열정으로 뭉친 TAVE는 새로운 기술을
                  <br />
                  탐험하고 혁신의 경계를 넓혀갑니다.
                </p>
              }
              className="right-0 bottom-0"
              SvgIcon={<Passion />}
            />
            <CoreCard
              title="성장"
              description={
                <p>
                  함께 배우고 경험하며, 개인과 팀의 성장
                  <br />
                  모두를 이끌어가는 공간입니다.
                </p>
              }
              SvgIcon={<Growth />}
            />
            <CoreCard
              title="다양성"
              description={
                <p>
                  다양한 분야의 융합을 통해
                  <br />
                  새로운 가능성을 탐색합니다.
                </p>
              }
              className="left-0 bottom-0"
              SvgIcon={<Diversity />}
            />
          </div>
          <div className="md:hidden w-full mt-12">
            <CoreValueCarousel />
          </div>
        </div>
        {/*세번째 화면 */}
        <div className="h-screen flex flex-col  md:justify-center items-center">
          <div className="text-[26px] md:text-4xl font-bold leading-[58px] mb-[14px] md:pb-[16px] mt-14">
            TAVE HISTORY
          </div>
          <div className="font-medium leading-[20px] mb-4 text-center text-[16px] font-normal md:text-xl md:font-medium">
            TAVE 프로젝트의 활동 내역 및<br className="sm:hidden" /> 수상 내역을
            확인해보세요
          </div>
          <History />
        </div>
        {/*네번째 화면 */}
        <div className="h-screen flex flex-col justify-center items-center w-full  md:mt-24">
          <>
            <div className="text-3xl font-bold mb-4">TAVE REVIEW</div>
            <div className="text-lg font-normal text-center leading-[140%] tracking-[-0.72px]">
              <span className="block md:inline">TAVE에 참여한 사람들의</span>
              <span className="block md:inline"> 후기를 들어보세요.</span>
            </div>
            <div className="mb-4 sm:mb-12 md:flex-grow" />
            <Review />
          </>
        </div>
        {/*다섯번째 화면 */}
        <div className="h-screen flex flex-col justify-center items-center w-full">
          <div className="text-3xl font-bold mb-4">SPONSORED BY</div>
          <div className="text-lg font-normal text-center">
            <span className="block md:inline">TAVE와 함께하는</span>
            <span className="block md:inline"> 공식 파트너 단체입니다.</span>
          </div>
          <Sponsored />
        </div>
      </div>
    </div>
  );
}
