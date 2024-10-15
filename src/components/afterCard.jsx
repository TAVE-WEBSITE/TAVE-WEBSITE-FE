
export default function AfterCard({ description, icon }) {
  return (
    <div>
      <div className="relative bg-[rgb(37,37,37)] text-white rounded-2xl w-[368px] h-[200px] border border-[rgba(77,81,89,1)] overflow-hidden">
        <div className="relative w-full h-full">
          <img src={icon} alt="icon" className="absolute bottom-0 right-0" />
        </div>
        <div className="absolute top-16 left-10">
          <div className="text-2xl z-10 text-left whitespace-pre-line">{description}</div>
        </div>
      </div>
    </div>
  );
}
