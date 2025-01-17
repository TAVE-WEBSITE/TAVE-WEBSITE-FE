import Arrow from "../../assets/images/BlackArrow.svg";
import HoverArrow from "../../assets/images/WhiteArrow.svg";

export default function PartCard({
  KorTitle,
  EngTitle,
  description,
  icon,
  onClick,
}) {
  // 디자인 파트만 다른 효과를 주기 위해 체크
  const isDesign = EngTitle === "DESIGN";

  return (
    <div
      className="flex break-keep md:w-full flex max-md:justify-center max-md:items-center"
      onClick={onClick}
    >
      <div className="w-[300px] md:w-full">
        <div
          className={`relative bg-blue-600 text-white rounded-2xl max-w-[368px] w-full h-[200px] overflow-hidden group transition-all duration-300 ${
            !isDesign ? "cursor-pointer" : ""
          }`}
        >
          <div className="relative">
            {/* 디자인 파트가 아닌 파트들 효과 */}
            {/* 아이콘에 호버 시 확대 효과 적용 */}
            <img
              src={icon}
              alt="icon"
              className={`absolute top-0 left-0 transform transition-transform duration-300 ${
                !isDesign ? "group-hover:scale-110" : ""
              }`}
            />
            {/* hover 전 화살표 아이콘 */}
            <img
              src={Arrow}
              alt="arrow"
              className={`absolute top-[5.5rem] w-[75px] right-4 transition-opacity duration-300 opacity-100 ${
                !isDesign ? "group-hover:hidden" : ""
              }`}
            />
            {/* hover 후 화살표 아이콘 */}
            <img
              src={HoverArrow}
              alt="hover arrow"
              className={`absolute top-[5.5rem] w-[75px] right-4 transition-opacity duration-300 opacity-0 ${
                !isDesign ? "group-hover:opacity-100" : ""
              }`}
            />
          </div>
          <div className="absolute top-16 left-10 body-highlight-1">
            <div className="text-2xl text-black z-10 text-left">{KorTitle}</div>
            <div className="text-2xl text-black z-10 mt-2 text-left">
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
        <div className="text-base font-medium mt-2 w-full whitespace-pre-line text-left mb-8 max-w-[300px]">
          {description}
        </div>
      </div>
    </div>
  );
}
