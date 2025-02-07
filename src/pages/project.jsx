import { useState, useEffect, useCallback } from 'react';
import Tab from '../components/tab';
import File from '../components/file';
import { getProject } from '../api/projectApi';
import Wave from '../assets/images/studyWave.svg';
import Footer from '../components/footer';

export default function Project() {
    const categories = ['연합 프로젝트', '심화 프로젝트'];
    const categoryMap = {
        '연합 프로젝트': 'COLLABORATIVE',
        '심화 프로젝트': 'ADVANCED',
    };

    const [selectedFiled, setSelectedFiled] = useState('연합 프로젝트');
    const [isTabFixed, setIsTabFixed] = useState(false);
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [visibleCounts, setVisibleCounts] = useState({
        '연합 프로젝트': 12,
        '심화 프로젝트': 12,
    }); // 카테고리별 visibleCount 관리

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const projectData = await getProject(0, 1000); // 전체 데이터 요청
                setResponse(projectData.result.content);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleScroll = useCallback(() => {
        // console.log(window.scrollY);
        const shouldBeFixed = window.scrollY >= 340;
        if (shouldBeFixed !== isTabFixed) {
            setIsTabFixed(shouldBeFixed);
        }
    }, [isTabFixed]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const handleFiledChange = (field) => {
        setSelectedFiled(field);
    };

    const filteredProject = response.filter((data) => {
        return data.field === categoryMap[selectedFiled];
    });

    const handleLoadMore = () => {
        setVisibleCounts((prevCounts) => ({
            ...prevCounts,
            [selectedFiled]: prevCounts[selectedFiled] + 12,
        }));
    };

    const handleTabClick = () => {
        setVisibleCounts((prevCounts) => ({
            ...prevCounts,
            [selectedFiled]: 12, // 탭 변경 시 초기화
        }));
    };

    return (
        <div className="grid place-items-center">
            <img src={Wave} className="absolute z-0 md:hidden h-full top-0 w-full" />
            <div className="mt-20 pt-24 pb-12 grid place-items-center w-4/5 break-keep text-center">
                <div className="text-4xl font-bold leading-14 pb-4 ">TAVE의 프로젝트를 소개합니다</div>
                <div className="hidden md:inline font-medium mt-5 text-center text-base">
                    자세한 내용이 궁금하다면? 아래의 폴더를 클릭하시면 후기 링크로 연결됩니다.
                </div>
                <div className="md:hidden font-normal mt-10 text-base text-center text-2xl">
                    자세한 내용이 궁금하다면?
                    <br />
                    아래의 폴더를 클릭하시면 후기 링크로 연결됩니다.
                </div>
            </div>

            <div className="product w-full max-w-6xl">
                <div
                    className={`tabs-container relative px-5 break-keep text-center ${
                        isTabFixed
                            ? 'sticky top-12 z-20 bg-gradient-to-b from-black from-40% to-transparent w-full max-w-6xl'
                            : ''
                    }`}
                >
                    <div className={`tabs ${isTabFixed ? 'flex justify-center' : 'grid place-items-center'}`}>
                        <div className="py-10">
                            <Tab category={categories} onCategoryChange={handleFiledChange} onClick={handleTabClick} />
                        </div>
                    </div>
                </div>

                <div className="content pb-12">
                    <div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 mt-12 justify-items-center mb-12">
                            {filteredProject && filteredProject.length > 0 ? (
                                [...filteredProject].reverse()
                                    .slice(0, visibleCounts[selectedFiled])
                                    .map((data, index) => (
                                        <File
                                            key={index}
                                            type={data.field || 'N/A'}
                                            title={data.title || '제목 없음'}
                                            teamNum={Number(data.generation) || '기수 없음'}
                                            teamName={data.teamName || ''}
                                            description={data.description || '설명 없음'}
                                            blogUrl={data.blogUrl || '#'}
                                        />
                                    ))
                            ) : (
                                <div className="text-gray-500 text-center col-span-full">
                                    표시할 프로젝트가 없습니다.
                                </div>
                            )}
                        </div>

                        {visibleCounts[selectedFiled] < filteredProject.length && (
                            <div className="flex justify-center mt-2">
                                <button
                                    onClick={handleLoadMore}
                                    className="px-4 py-2 bg-[#195BFF] text-white rounded-lg text-base font-bold"
                                >
                                    더보기
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
