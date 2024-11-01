
export default function AfterCard({ description, icon }) {
  return (
    
      <div className="relative bg-[rgb(37,37,37)] text-white rounded-2xl w-64 sm:w-80 md:w-64 xl:w-96 h-40 border border-[rgba(77,81,89,1)] overflow-hidden max-w-[368px] w-88 lg:mx-auto ">
        <div className="relative h-full flex ">
        <div className="flex align-center ml-5 my-auto">
          <div className="text-lg z-10 text-left whitespace-pre-line lg:text-xl">{description}</div>
        </div>
          <img src={icon} alt="icon" className="absolute bottom-0 right-0" />
        </div>
        
      </div>
    
  );
}
