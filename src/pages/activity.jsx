import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import PartCard from '../components/activity/partCard';
import StepComponent from '../components/stepComponent';
import AfterCard from '../components/afterCard';

import After1 from '../assets/images/After1.svg';
import After2 from '../assets/images/After2.svg';
import After3 from '../assets/images/After3.svg';

import ActivityBack from '../assets/images/ActivityBack.svg';
import Part from '../components/activity/Part';

export default function Activity() {
    const navigate = useNavigate();
    const steps = [
        {
            title: 'OT',
            description: '새로운 기수를 시작하며, 다양한 활동 방법을 소개하는 세션',
        },
        {
            title: 'MT',
            description: '팀 빌딩이 이루어지기 전, 다른 TAVY들을 알아가는 세션',
        },
        {
            title: '만남의 장',
            description: 'TAVE만의 노하우가 들어간 팀 빌딩 세션',
        },
        {
            title: '테버랜드',
            description: 'OB와 YB가 다양한 콘텐츠 내에서 활동하며 네트워킹하는 세션',
        },
        {
            title: '전반기 시상식',
            description: '전반기 동안 스터디한 결과를 공유하고 시상하는 세션',
        },
        {
            title: '테런데이',
            description: '다양한 멘토들에게 직접 프로젝트 피드백을 받을 수 있는 세션',
        },
        {
            title: 'OB 강연',
            description: 'IT 업계 현직자 OB분들을 초청하여, 인사이트를 얻을 수 있는 세션',
        },
        {
            title: '테이브의 밤',
            description: '매 회 다른 컨셉을 두고, 전 기수가 모이는 네트워킹 센터',
        },
        {
            title: 'TAVE 컨퍼런스',
            description: '후반기 동안 개발한 후반기 프로젝트를 공유하고 시상하는 세션',
        },
    ];

    const [selectedStep, setSelectedStep] = useState(0);
    const stepRefs = useRef(steps.map(() => React.createRef()));

    const handleScroll = useCallback(() => {
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
        <div className="w-full">
            <div className="relative h-[800px] ">
                <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent z-20" />
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
                <img src={ActivityBack} alt="ActivityBack" className="absolute object-cover w-full h-full z-10" />
            </div>

            <div className="absolute z-30 flex flex-col gap-[60px] items-center md:px-[140px] px-6 w-full top-[640px]">
                <div className="text-[40px] font-bold">모집 대상</div>
                <div className="lg:px-[140px] w-full md:py-[30px] py-5 bg-[#232323] rounded-[20px]">
                    <div className="text-center md:text-lg text-sm font-bold ">
                        다양성을 존중하며 협력하는 IT에 관심있는 <br />
                        대학생 누구나 지원 가능합니다.
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col justify-center w-full px-4 mx-auto lg:w-4/5 mt-12">
                <div className="flex flex-col items-center justify-center text-center w-full ">
                    <div className="w-full">
                        <Part />
                    </div>

                    <div className="mb-20 text-4xl mt-96 ">정규 세션 소개</div>
                    <StepComponent steps={steps} selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
                </div>
            </div>

            <div className="h-screen w-full justify-center align-center flex flex-col md:gap-15 gap-[40px]">
                <div className="text-[26px] font-bold w-full text-center">AFTER TAVE</div>
                <div className="grid justify-items-center sm:grid-cols-1 md:grid-cols-3 md:gap-6 w-full px-6 gap-5">
                    <AfterCard icon={After1} description={'활동증명서\n발급'} />
                    <AfterCard icon={After2} description={'우수 스터디 및 프로젝트\n시상 및 발급'} />
                    <AfterCard icon={After3} description={'다양한 분야의 OB들과\n네트워킹'} />
                </div>
            </div>
        </div>
    );
}
