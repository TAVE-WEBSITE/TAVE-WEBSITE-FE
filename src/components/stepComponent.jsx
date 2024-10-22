import ActiveDot from "../assets/images/ActiveStep.svg";
import NotActiveDot from "../assets/images/NotActiveStep.svg";

export default function StepComponent({ steps, selectedStep }) {
  return (
    <div className="flex items-start">
      {/* 정규 세션 단계 */}
      <div className="flex flex-col gap-5">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-5 relative">
            {/* 단계별 Dot */}
            <img
              src={selectedStep === index ? ActiveDot : NotActiveDot}
              className="z-10 transition-all duration-300 ease-in-out"
              alt="StepDot"
            />

            {/* 단계별 수직 라인 */}
            {index !== steps.length && (
              <div
                className={`absolute left-3 ${
                  index === 0 ? "bottom-0 h-[80px]" : "top-50% h-[200px]"
                } ${
                  index === 8 ? "top-0 h-[80px]" : "top-50% h-[200px]"
                } w-[3px] transition-all duration-500 ease-in-out ${
                  selectedStep === index
                    ? "bg-gradient-to-b from-[rgb(36,36,36)] via-[rgb(39,76,200)] to-[rgb(36,36,36)]"
                    : "bg-[rgb(36,36,36)]"
                }`}
              />
            )}

            {/* 정규 세션 타이틀, 내용 소개 + selectedStep일 때 크기 조금 커지게 */}
            <div
              className={`flex justify-between gap-3 items-center w-92 lg:min-w-[550px] h-36 rounded-2xl p-5 transition-transform duration-300 ease-in-out ${
                selectedStep === index ? "scale-105" : "scale-100"
              } transition-all duration-300 ease-in-out ${
                selectedStep === index
                  ? "bg-[rgb(39,76,200)] text-white"
                  : "bg-[rgba(36,36,36,0.7)] text-gray-500"
              } lg:w-[800px]`}
            >
              <div className="text-xl lg:text-2xl">{step.title}</div>
              <div className="text-base font-medium lg:text-lg">
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
