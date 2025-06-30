import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSession } from '../api/activity';

import Footer from '../components/footer';
import StepComponent from '../components/stepComponent';
import AfterCard from '../components/afterCard';

import After1 from '../assets/images/After1.svg';
import After2 from '../assets/images/After2.svg';
import After3 from '../assets/images/After3.svg';

import ActivityBack from '../assets/images/ActivityBack.jpg';
import ActivityWave from '../assets/images/ActivityWave.svg';
import Part from '../components/activity/Part';

export default function Activity() {
    const navigate = useNavigate();
    const [steps, setSteps] = useState([]);
    const [selectedStep, setSelectedStep] = useState(0);
    const stepRefs = useRef([]);

    // getSession API로 세션 데이터 불러오는 코드 추가
    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const sessionData = await getSession();
                console.log('세션 데이터:', sessionData); 
                
                if (sessionData && Array.isArray(sessionData.result)) {
                    setSteps(sessionData.result);
                    stepRefs.current = sessionData.result.map(() => React.createRef());
                } else {
                    console.error('세션 데이터가 올바른 형태가 아닙니다:', sessionData);
                    setSteps([]);
                }
            } catch (error) {
                console.error('세션 데이터를 불러오는데 실패했습니다:', error);
                setSteps([]);
            }
        };

        fetchSessions();
    }, []);

    const handleScroll = useCallback(() => {
        if (!stepRefs.current || stepRefs.current.length === 0) return;
        
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        stepRefs.current.forEach((ref, index) => {
            const element = ref.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const elementCenter = rect.top + rect.height / 2;

                // 뷰포트의 중앙에 위치하는지 계산
                if (
                    scrollPosition >= elementCenter - rect.height / 2 &&
                    scrollPosition <= elementCenter + rect.height / 2
                ) {
                    setSelectedStep(index);
                }
            }
        });
    }, [stepRefs, setSelectedStep]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <>
            <div className="relative md:h-[600px] sm:h-[500px] h-[340px] w-full">
                <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-[#121212] to-transparent z-20" />
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#121212] to-transparent z-20" />
                <img src={ActivityBack} alt="ActivityBack" className="absolute object-cover w-full h-full z-10" />
            </div>

            <div
                className="absolute z-30 flex flex-col md:gap-15 gap-10 items-center 2xl:px-[320px] lg:px-[140px] md:px-[100px] px-6 w-full
            md:top-[540px] sm:top-[400px] top-[360px]"
            >
                <div className="md:text-[40px] text-[26px] font-bold">모집 대상</div>
                <div className="lg:px-[120px] w-full md:py-[30px] py-5 bg-[#232323] rounded-[20px]">
                    <div className="text-center md:text-xl sm:text-base text-sm  font-medium leading-normal">
                        다양성을 존중하며 협력하는 IT에 관심있는 <br />
                        대학생 누구나 지원 가능합니다.
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col justify-center w-full px-4 mx-auto">
                <div className="flex flex-col items-center justify-center text-center w-full ">
                    <div className="absolute w-full h-full">
                        <img src={ActivityWave} alt="ActivityWave" className="object-cover w-full h-full" />
                    </div>
                    <div className="w-full md:w-auto">
                        <Part />
                    </div>
                    <div className="md:mb-15 mb-[45px] md:text-[40px] font-bold text-[26px] mt-96 ">정규 세션 소개</div>
                    {steps.length > 0 && (
                        <StepComponent steps={steps} selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
                    )}
                </div>
            </div>

            <div className="w-full justify-center align-center flex flex-col md:gap-15 md:gap-[60px] gap-[45px] my-96">
                <div className="md:text-[40px] font-bold text-[26px] w-full text-center">AFTER TAVE</div>
                <div className="grid justify-items-center sm:grid-cols-1 md:grid-cols-3 md:gap-6 w-full px-6 gap-5">
                    <AfterCard icon={After1} description={'활동증명서\n발급'} />
                    <AfterCard icon={After2} description={'우수 스터디 및 프로젝트\n시상'} />
                    <AfterCard icon={After3} description={'다양한 분야의 OB들과\n네트워킹'} />
                </div>
            </div>
            <Footer />
        </>
    );
}
