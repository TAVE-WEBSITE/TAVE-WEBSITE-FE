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

  return (
    <div
      className={`flex break-keep w-full flex max-md:justify-center max-md:items-center ${
        center ? "opacity-100" : "opacity-20"
      }`}
      onClick={onClick}
    >
      <div className="flex-col  sm:w-11/12 md:w-full">
        <div
          className="relative bg-blue-600 text-white rounded-2xl w-full h-36 sm:40 md:h-44 overflow-hidden group transition-all duration-300 cursor-pointer"
        >
          <div className="relative">
            <img
              src={icon}
              alt="icon"
              className="absolute top-0  transform transition-transform duration-300  h-36 sm:h-42 md:h-44 w-48 sm:w-60 md:w-56 md:group-hover:scale-110 left-[-1.8rem]"
            />
            {/* hover 전 화살표 아이콘 */}
            <img
              src={Arrow}
              alt="arrow"
              className={`absolute top-[6.5rem] sm:top-[5rem] md:top-[6rem] xl:top-[4.6rem]  w-12 lg:w-[60px] xl:w-[75px] right-4 transition-opacity duration-300 opacity-0 md:opacity-100 ${
                !isDesign ? "md:group-hover:hidden" : ""
              } ${center ? "max-md:hidden" : "max-md:block"}`}
            />
            {/* hover 후 화살표 아이콘 */}
            <img
              src={HoverArrow}
              alt="hover arrow"
              className={`absolute top-[5rem] sm:top-[5rem] md:top-[6rem] xl:top-[4.6rem] w-12 lg:w-[60px] xl:w-[75px] right-4 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 
                ${center ? "max-md:opacity-100" : "max-md:opacity-0"}`}
            />
          </div>
          <div
  className={`absolute top-1/2 ${
    EngTitle === "DESIGN" || EngTitle === "BACKEND"
      ? "left-[0.5rem]"
      : EngTitle === "DEEP LEARNING"
      ? "left-[-0.7rem]"
      : "left-[-0.2rem]"
  } sm:left-6 body-highlight-1 max-md:scale-75 transform -translate-y-1/2`}
>
       <div className="text-lg md:text-xl max-lg:text-2xl text-black z-10 text-left font-bold">
              {KorTitle}
            </div>
            <div className="text-lg md:text-xl max-lg:text-2xl text-black z-10 mt-2 text-left font-bold">
              {EngTitle}
            </div>
          </div>

        </div>
        <div className="font-Pretendard text-xs sm:text-sm md:text-base font-medium mt-2 w-full text-left mb-8  max-md:py-[15px] max-md:px-[24px] rounded-2xl max-md:bg-white max-md:bg-opacity-10">
          {description}
        </div>
      </div>
    </div>
  );
}
