import ActiveDot from "../assets/images/ActiveStep.svg";
import NotActiveDot from "../assets/images/NotActiveStep.svg";

export default function StepComponent({ steps, selectedStep }) {
  return (
    <div className="flex items-start">
      {/* 정규 세션 단계 */}
      <div className="flex flex-col gap-5">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-10 relative">
            {/* 단계별 Dot */}
            <img
              src={selectedStep === index ? ActiveDot : NotActiveDot}
              className={`z-10 transition-all duration-300 ease-in-out`}
              alt="StepDot"
            />
            
            {/* 단계별 수직 라인 */}
            {/* 첫번째와 마지막 단계는 라인이 Dot 밖으로 나오지 않게 길이와 top 조정 */}
            {index !== steps.length  && (
              <div
                className={`absolute left-[12px] ${index === 0? "bottom-0 h-[90px]" : "top-50% h-[200px]"}  ${index === 5? "top-0 h-[90px]" : "top-50% h-[200px]"} w-[3px]  transition-all duration-500 ease-in-out ${
                  selectedStep === index
                    ? "bg-gradient-to-b from-[rgb(36,36,36)] via-[rgb(39,76,200)] to-[rgb(36,36,36)]"
                    : "bg-[rgb(36,36,36)]"
                }`}
              />
            )}
            
            {/* 정규 세션 타이틀, 내용 소개 div */}
            <div
              className={`flex justify-between items-center w-[858px] h-40 rounded-2xl p-10 transition-all duration-300 ease-in-out ${
                selectedStep === index
                  ? "bg-[rgb(39,76,200)] text-white"
                  : "bg-[rgb(36,36,36)] text-gray-500"
              }`}
            >
              <div className="text-2xl">{step.title}</div>
              <div className="text-xl font-medium">{step.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
