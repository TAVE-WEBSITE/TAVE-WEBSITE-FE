import Arrow from "../assets/images/Arrow.svg";

export default function PartCard({ KorTitle, EngTitle, description, icon }) {
  return (
    <div>
      <div className="relative bg-blue-600 text-white rounded-2xl w-[368px] h-[200px] ">
        <div className="relative">
          <img src={icon} alt="icon" className="absolute top-0 left-0" />
          <img src={Arrow} alt="arrow" className="absolute top-[5.5rem] right-4" />
        </div>
        <div className="absolute top-16 left-10">
          <div className="text-2xl text-black z-10 text-left">{KorTitle}</div>
          <div className="text-2xl text-black z-10 mt-2 text-left">{EngTitle}</div>
        </div>
      </div>
      <div className="text-base font-extralight mt-2 w-96 whitespace-pre-line text-left mb-8">{description}</div>
    </div>
  );
}
