import { useEffect, useRef } from "react";

import ActiveDot from "../assets/images/ActiveStep.svg";
import NotActiveDot from "../assets/images/NotActiveStep.svg";

export default function StepComponent({
  steps,
  selectedStep,
  setSelectedStep,
}) {
  const stepRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index"), 10);
          setSelectedStep(index);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [setSelectedStep]);

  return (
    <div className="flex items-start">
      {/* 정규 세션 단계 */}
      <div className="flex flex-col gap-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-5 relative"
            ref={(el) => (stepRefs.current[index] = el)}
            data-index={index}
          >
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

 {/* 세션 배경이미지 추가*/}
 <div
  className={`relative flex w-full justify-between items-center gap-3 w-88 lg:min-w-[550px] sm:py-12 h-44 rounded-2xl px-5 transition-transform duration-300 ease-in-out ${
    selectedStep === index ? "scale-100" : "scale-90"
  } lg:w-[800px] overflow-hidden ${
    // 
    // !step.imgUrl && (selectedStep === index
    selectedStep === index
      ? 'bg-[rgb(39,76,200)] text-white'
      : 'bg-[rgba(36,36,36,0.7)] text-gray-500'
  }`}
>
  {/* 배경 이미지 */}
  {/* {step.imgUrl && (
    <img
      src={step.imgUrl}
      alt="배경"
      className="absolute inset-0 w-full h-full object-cover z-10"
      style={{
        opacity: selectedStep === index ? 1.0 : 0.3,
      }}
    />
  )} */}

  {/* 오버레이 */}
  {/* <div className="absolute inset-0 z-10 bg-[rgba(36,36,36,0.5)]" /> */}

  {/* 콘텐츠 */}
  <div
  className={`relative z-20 flex justify-between w-full items-center transition-opacity duration-300  ${
    selectedStep === index ? "opacity-100" : "opacity-50"
  }`}
>
    <div className={`text-sm md:text-2xl font-bold break-keep text-left ${
      selectedStep === index ? 'text-white' : 'text-gray-500'
    }`}>
      {step.title}
    </div>
    <div className={`text-xs font-medium md:text-xl text-start break-keep ${
      selectedStep === index ? 'text-white' : 'text-gray-500'
    }`}>
      {step.description}
    </div>
  </div>
</div>

           
          </div>
        ))}
      </div>
    </div>
  );
}
