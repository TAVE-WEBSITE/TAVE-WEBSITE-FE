import Arrow from "../../assets/images/BlackArrow.svg";
import HoverArrow from "../../assets/images/WhiteArrow.svg";

export default function PartCard({
  KorTitle,
  EngTitle,
  description,
  icon,
  onClick,
  center,
}) {
  // 디자인 파트만 다른 효과를 주기 위해 체크
  const isDesign = EngTitle === "DESIGN";
  //console.log("센터유무", KorTitle, center);

  return (
    <div
      className={`flex break-keep w-full flex max-md:justify-center max-md:items-center ${
        center ? "opacity-100" : "opacity-20"
      }`}
      onClick={onClick}
    >
      <div className="flex-col w-[98%] sm:w-11/12 md:w-full">
        <div
          className={`relative bg-blue-600 text-white rounded-2xl w-full h-[160px] md:h-[170px] lg:h-[17vw] xl:h-[200px] overflow-hidden group transition-all duration-300 ${
            !isDesign ? "cursor-pointer" : ""
          }`}
        >
          <div className="relative">
            {/* 디자인 파트가 아닌 파트들 효과 */}
            {/* 아이콘에 호버 시 확대 효과 적용 */}
            <img
              src={icon}
              alt="icon"
              className={`absolute top-0 left-[-35px] sm:left-0 md:left-[-15px] lg:left-0 transform transition-transform duration-300  h-[160px]  md:h-[170px] lg:h-[17vw] xl:h-[200px] ${
                !isDesign ? "md:group-hover:scale-110" : ""
              }  `}
            />
            {/* hover 전 화살표 아이콘 */}
            <img
              src={Arrow}
              alt="arrow"
              className={`absolute top-[6.5rem] sm:top-[5rem] md:top-[6rem]  w-12 lg:w-[60px] xl:w-[75px] right-4 transition-opacity duration-300 opacity-0 md:opacity-100 ${
                !isDesign ? "md:group-hover:hidden" : ""
              } ${center ? "max-md:hidden" : "max-md:block"}`}
            />
            {/* hover 후 화살표 아이콘 */}
            <img
              src={HoverArrow}
              alt="hover arrow"
              className={`absolute top-[5rem] sm:top-[5rem] md:top-[6rem]  w-12 lg:w-[60px] xl:w-[75px] right-4 transition-opacity duration-300 opacity-100 md:opacity-0 ${
                !isDesign ? "md:group-hover:opacity-100" : ""
              } ${center ? "max-md:opacity-100" : "max-md:opacity-0"}`}
            />
          </div>
          <div className="absolute top-11 sm:top-15 md:top-[5.5vw] lg:top-16  left-1 sm:left-7 md:left-10 lg:left-7  xl:left-10 body-highlight-1 max-md:scale-75 ">
            <div className="text-lg md:text-xl max-lg:text-2xl text-black z-10 text-left font-bold">
              {KorTitle}
            </div>
            <div className="text-lg md:text-xl max-lg:text-2xl text-black z-10 mt-2 text-left font-bold">
              {EngTitle}
            </div>
          </div>
          {/* 디자인 파트에만 오버레이 효과 적용 */}
          {isDesign && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl font-bold">COMING SOON</span>
            </div>
          )}
        </div>
        <div className="font-Pretendard text-xs sm:text-sm md:text-base font-medium mt-2 w-full whitespace-pre-line text-left mb-8  max-md:py-[15px] max-md:px-[24px] rounded-2xl max-md:bg-white max-md:bg-opacity-10">
          {description}
        </div>
      </div>
    </div>
  );
}
