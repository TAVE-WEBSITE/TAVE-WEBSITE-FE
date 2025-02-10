import React, { useState, useEffect } from 'react';
import { getPublicHistory } from '../api/homeApi.js';

export default function History() {
    const [histories, setHistories] = useState([]);
    const [selectedGroupLabel, setSelectedGroupLabel] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPublicHistory();
                if (response && Array.isArray(response)) {
                    setHistories(response);

                    // 첫 번째 그룹을 초기값으로 설정
                    const groups = groupGenerations(response);
                    if (groups.length > 0) {
                        setSelectedGroupLabel(groups[0]);
                    }
                } else {
                    // 응답이 없거나 빈 배열일 경우
                    setHistories([]);
                }
            } catch (error) {
                console.error('Error fetching history:', error);
                setHistories([]);
            }
        };
        fetchData();
    }, []);

    // 내용 5개 이하는 두 기수씩 그룹화, 나머지가 1일 때 앞 그룹에 병합
    const groupGenerations = (data) => {
        if (!data || !Array.isArray(data)) return [];
        // 최신 기수부터 보여줌
        const reversed = data.slice().reverse();
        //console.log("히스토리" + data[1].generation);
        const groups = Array.from({ length: Math.ceil(reversed.length / 2) }, (_, i) =>
            reversed.slice(i * 2, i * 2 + 2)
        );
        const groups2 = getGroup(data.slice().reverse());
        //console.log("결과", groups2);

        // 나머지가 1일 때 앞 그룹에 병합
        if (groups.length > 1 && groups[groups.length - 1].length === 1) {
            groups[groups.length - 2].push(...groups.pop());
        }

        return groups2;
    };

    //데이터 내부에 설명 개수가 5개 이하인지 판별하는 부분
    const getGroup = (data) => {
        //바로 result 배열들을 data로 받음
        //data[0].generation : 1st 가 나오는 현재는 리버스되어서 넣고 뒤에부터 나올듯..!
        //data[0].generation : 14th 인!
        let groups = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].details.length > 5) {
                //하나로 묶기
                groups.push(data[i].generation);
            } else if (data[i + 1].details.length < 5) {
                groups.push(getGroupLabelTest(data, i));
                i++;
                //두 개씩 묶기
            } else {
                //하나로 묶기
                groups.push(data[i].generation);
            }
        }
        return groups;
    };

    // 그룹 이름 생성
    const getGroupLabel = (group) => `${group[0].generation}-${group[group.length - 1].generation}`;

    const getGroupLabelTest = (group, index) => `${group[index].generation}-${group[index + 1].generation}`;

    // 선택한 그룹 데이터 필터링
    // 여기에 중간에 - 가 있는지 없는지로 판단해서. 있다면 아래 코드
    // 없다면 그냥 해당 generation 으로 가져오기
    const filteredHistory = histories
        .filter((item) => {
            if (!selectedGroupLabel) return false;

            if (selectedGroupLabel.length > 4) {
                const [gen1, gen2] = selectedGroupLabel
                    .split('-')
                    .map((gen) => parseInt(gen))
                    .sort((a, b) => b - a); // 내림차순 정렬

                const [startGen, endGen] = [gen1, gen2]; // 범위 설정
                const currentGen = parseInt(item.generation);
                return currentGen >= endGen && currentGen <= startGen;
            } else {
                const Gen = parseInt(selectedGroupLabel); // 단일 값 필터링
                return parseInt(item.generation) === Gen;
            }
        })
        .sort((a, b) => parseInt(b.generation) - parseInt(a.generation)); // 내림차순 정렬

    /*
     <div className="w-screen px-6 flex items-center justify-center">
        <div className="flex gap-4 justify-start overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide scrollbar-hidden">
    */
    return (
        <div className="flex flex-col items-center justify-center w-full xs:max-w-[90vw] sm:max-w-[90vw]">
            {/* 그룹 칩 */}
            <div className="w-full  flex items-center justify-center">
                <div className="flex gap-4 justify-start overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide scrollbar-hidden">
                    {groupGenerations(histories).map((group, index) => {
                        const groupLabel = group;
                        return (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full text-md whitespace-nowrap text-center ${
                                    selectedGroupLabel === groupLabel
                                        ? 'bg-gradient-to-r from-[#6D3CFF] to-[#1A5BFF] text-white font-bold'
                                        : 'bg-[#393A40] bg-opacity-50 border-gray-700 font-semibold text-[#FFFFFF80]'
                                }`}
                                onClick={() => setSelectedGroupLabel(groupLabel)}
                            >
                                {groupLabel}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* 필터링된 그룹 데이터 */}
            <div
                className={`mt-7 md:mt-8 w-full grid  gap-x-6 ${
                    filteredHistory.length == 1 ? 'grid-cols-1' : 'md:grid-cols-2 grid-cols-1'
                }`}
            >
                {filteredHistory.length > 0 ? (
                    filteredHistory.map((historyItem) => (
                        <div
                            key={historyItem.generation}
                            className="rounded-[15px] border border-gray-700 overflow-hidden  bg-[rgba(255,255,255,0.07)] backdrop-blur-[7.5px]  mb-4"
                        >
                            {/* 내용 */}
                            <div className="p-3 sm:p-6 z-10 max-h-[54vh] overflow-y-auto container xl:scrollbar-hidden ">
                                <div className="pb-4 md:pb-6 text-[15px] md:body-highlight-1">
                                    {historyItem.generation}
                                </div>
                                {historyItem.details.map((detail, index) => (
                                    <div key={index} className="md:mb-2">
                                        <span className="font-bold text-[13px] body-highlight-2 md:body-highlight-3">
                                            {detail.description}
                                        </span>
                                        {detail.additionalDescription && (
                                            <span className="max-md:font-normal md:text-[#FFFFFF80] body-highlight-2 md:body-light-3 ">
                                                &nbsp;:&nbsp;{detail.additionalDescription}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="mt-4 text-gray-500">조회할 이력이 없습니다</p>
                )}
            </div>
        </div>
    );
}

/*

<div className="w-full overflow-x-auto scrollbar-hide">
  <div className="flex gap-4 flex-nowrap">
    {groupGenerations(histories).map((group, index) => {
      console.log("그룹데이터", group);
      const groupLabel = group;
      return (
        <button
          key={index}
          className={`px-4 py-2 rounded-full text-md whitespace-nowrap text-center ${
            selectedGroupLabel === groupLabel
              ? "bg-gradient-to-r from-[#6D3CFF] to-[#1A5BFF] text-white font-bold"
              : "bg-[#393A40] bg-opacity-50 border-gray-700 font-semibold text-[#FFFFFF80]"
          }`}
          onClick={() => setSelectedGroupLabel(groupLabel)}
        >
          {groupLabel}
        </button>
      );
    })}
  </div>
</div>


*/
