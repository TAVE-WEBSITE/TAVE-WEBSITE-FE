import React, { useState } from "react";

const hitories = [
  {
    id: 0,
    name: "1-2nd",
    content:
      "“ 테이브에서의 활동과 경험들이 실무에서 많은 도움이 되었습니다. 이븐하게 노트북 닦는 법. 가나다라 마바사 아자차카타파하. ”",
    subcontent: "부연설명",
  },
  {
    id: 1,
    name: "3th",
    role: "13기 DA / 카카오",
    content:
      "“ 또 다른 경험은 실제로 업무에 큰 도움이 되었습니다. 이 부분은 정말 유익했어요.”",
    subcontent: "부연설명",
  },
  {
    id: 2,
    name: "4th",
    role: "13기 DA / 카카오",
    content:
      "“ 테이브에서의 활동과 경험들이 실무에서 많은 도움이 되었습니다.테이브에서의 활동과 경험들이 실무에서 많은 도움이 되었습니다.테이브에서의 활동과 경험들이 실무에서 많은 도움이 되었습니다. 이븐하게 노트북 닦는 법. 가나다라 마바사 아자차카타파하테이브에서의 활동과 경험들이 실무에서 많은 도움이 되었습니다.테이브에서의 활동과 경험들이 실무에서 많은 도움이 되었습니다. ”",
    subcontent: "부연설명",
  },
  {
    id: 3,
    name: "5th",
    role: "13기 DA / 카카오",
    content:
      "“ 또 다른 경험은 실제로 업무에 큰 도움이 되었습니다. 이 부분은 정말 유익했어요.”",
    subcontent: "부연설명",
  },
  {
    id: 4,
    name: "6th",
    role: "13기 DA / 카카오",
    content:
      "“ 또 다른 경험은 실제로 업무에 큰 도움이 되었습니다. 이 부분은 정말 유익했어요.”",
    subcontent: "부연설명",
  },
  {
    id: 5,
    name: "7th",
    role: "13기 DA / 카카오",
    content:
      "“ 테이브에서의 활동과 경험들이 실무에서 많은 도움이 되었습니다.테이브에서의 활동과 경험들이 실무에서 많은 도움이 되었습니다.테이브에서의 활동과 경험들이 실무에서 많은 도움이 되었습니다. 이븐하게 노트북 닦는 법. 가나다라 마바사 아자차카타파하테이브에서의 활동과 경험들이 실무에서 많은 도움이 되었습니다.테이브에서의 활동과 경험들이 실무에서 많은 도움이 되었습니다. ”",
    subcontent: "부연설명",
  },
];

export default function History({ year, title, contents }) {
  const [all, setAll] = useState(0);

  const reversedHistories = [...hitories].reverse();

  const handleAllClick = () => {
    setAll(!all);
  };

  const Black = () => {
    return (
      <div
        className="absolute h-60 w-full bottom-10 right-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
        }}
      ></div>
    );
  };

  return all ? (
    <div className="flex flex-col items-center">
      <div className="flex gap-6 pt-[48px] mx-32">
        <div className="w-1/2">
          {reversedHistories.map(
            (data, index) =>
              index % 2 === 0 && ( // 짝수 인덱스일 경우
                <div
                  key={data.id}
                  className="rounded-[15px] border border-white p-12 mb-4 "
                >
                  <div className="font-bold text-2xl pb-6">{data.name}</div>
                  <div className="text-base leading-6">{data.content}</div>
                  <div className="text-white text-base leading-6 text-opacity-50 font-light">
                    {data.subcontent}
                  </div>
                </div>
              )
          )}
        </div>
        <div className="w-1/2">
          {reversedHistories.map(
            (data, index) =>
              index % 2 === 1 && ( // 홀수 인덱스일 경우
                <div
                  key={data.id}
                  className="rounded-[15px] border border-white p-12 mb-4"
                >
                  <div className="font-bold text-2xl pb-6">{data.name}</div>
                  <div className="text-base leading-6 ">{data.content}</div>
                  <div className="text-white text-base leading-6 text-opacity-50 font-light">
                    {data.subcontent}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <button
        onClick={handleAllClick}
        className="flex items-center justify-center gap-10 rounded-[15px] text-white px-6 py-2 max-w-[6em] max-h-[8em]"
        style={{ backgroundColor: "#1A5BFF" }}
      >
        접기
      </button>
    </div>
  ) : (
    <div className="flex flex-col items-center relative">
      <div className="flex flex-col items-center">
        <div className="flex gap-6 pt-[48px] mx-32">
          <div className="w-1/2">
            {reversedHistories.slice(0, 4).map(
              (data, index) =>
                index % 2 === 0 && ( // 짝수 인덱스일 경우
                  <div
                    key={data.id}
                    className="rounded-[15px] border border-white p-12 mb-4 "
                  >
                    <div className="font-bold text-2xl pb-6">{data.name}</div>
                    <div className="text-base leading-6">{data.content}</div>
                    <div className=" text-white text-base leading-6 text-opacity-50 font-light">
                      {data.subcontent}
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="w-1/2">
            {reversedHistories.slice(0, 4).map(
              (data, index) =>
                index % 2 === 1 && ( // 홀수 인덱스일 경우
                  <div
                    key={data.id}
                    className="rounded-[15px] border border-white p-12 mb-4"
                  >
                    <div className="font-bold text-2xl pb-6">{data.name}</div>
                    <div className="text-base leading-6">{data.content}</div>
                    <div className=" text-white text-base leading-6 text-opacity-50 font-light">
                      {data.subcontent}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
        <Black />
      </div>
      <button
        onClick={handleAllClick}
        className="flex items-center justify-center gap-10 rounded-[15px] text-white px-6 py-2 max-w-[6em] max-h-[8em]"
        style={{ backgroundColor: "#1A5BFF" }}
      >
        더보기
      </button>
    </div>
  );
}
