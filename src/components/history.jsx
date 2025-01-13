import React, { useState, useEffect } from "react";
import { getPublicHistory } from "../api/homeApi.js";

export default function History() {
  const [histories, setHistories] = useState([]);
  const [selectedGroupLabel, setSelectedGroupLabel] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPublicHistory();
      setHistories(response);

      // 첫 번째 그룹을 초기값으로 설정
      const groups = groupGenerations(response);
      if (groups.length > 0) {
        setSelectedGroupLabel(getGroupLabel(groups[0]));
      }
    };
    fetchData();
  }, []);

  // 세 기수씩 그룹화, 나머지가 1일 때 앞 그룹에 병합
  const groupGenerations = (data) => {
    // 최신 기수부터 보여줌
    const reversed = data.slice().reverse();
    const groups = Array.from({ length: Math.ceil(reversed.length / 3) }, (_, i) =>
      reversed.slice(i * 3, i * 3 + 3)
    );

    // 나머지가 1일 때 앞 그룹에 병합
    if (groups.length > 1 && groups[groups.length - 1].length === 1) {
      // 병합 후 마지막 그룹 없애기
      groups[groups.length - 2].push(...groups.pop());
    }

    return groups;
  };

  // 그룹 이름 생성 
  const getGroupLabel = (group) => `${group[0].generation}-${group[group.length - 1].generation}`;

  // 선택한 그룹 데이터 필터링
  const filteredHistory = histories
    .filter((item) => {
      if (!selectedGroupLabel) return false;
      const [startGen, endGen] = selectedGroupLabel.split("-").map((gen) => parseInt(gen));
      const currentGen = parseInt(item.generation);
      return currentGen >= endGen && currentGen <= startGen;
    })
    // 최신 기수부터 보여줌
    .sort((a, b) => parseInt(b.generation) - parseInt(a.generation)); 

  return (
    <div className="flex flex-col items-center w-screen">
      {/* 그룹 칩 */}
      <div className="flex gap-4 mt-4">
        {groupGenerations(histories).map((group, index) => {
          const groupLabel = getGroupLabel(group);
          return (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-2xl ${
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

      {/* 선택된 그룹의 데이터 표시 */}
      <div className="mt-8 w-4/5">
        {filteredHistory.length > 0 ? (
          filteredHistory.map((historyItem) => (
            <div
              key={historyItem.generation}
              className=" rounded-[15px] border border-gray-700 bg-[rgba(255,255,255,0.07)] backdrop-blur-[7.5px] p-10 mb-4"
            >
              <div className="font-bold text-2xl pb-6">{historyItem.generation}</div>
              {historyItem.details.map((detail, index) => (
                <div key={index} className="flex gap-4 mb-2">
                  <p className="font-bold text-base">{detail.description}</p>
                  <p className="font-light text-base text-[#FFFFFF80]">{detail.additionalDescription}</p>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className="mt-4 text-gray-500">조회할 이력이 없습니다</p>
        )}
      </div>
    </div>
  );
}
