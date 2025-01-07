import React, { useState, useEffect } from 'react';
import { getPublicHistory } from '../api/homeApi.js';

export default function History() {
    const [all, setAll] = useState(0);
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPublicHistory();
            setHistories(response);
        };
        fetchData();
    }, []);

    const handleAllClick = () => {
        setAll(!all);
    };

    const Black = () => {
        return (
            <div
                className="absolute h-60 w-full bottom-10 right-0"
                style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
                }}
            ></div>
        );
    };

    return all ? (
        <div className="flex flex-col items-center">
            <div className="flex gap-6 pt-[48px] mx-32">
                <div className="w-1/2">
                    {histories.map(
                        (data, index) =>
                            index % 2 === 0 && ( // 짝수 인덱스일 경우
                                <div
                                    key={data.id}
                                    className="rounded-[15px] border border-gray-700 bg-[rgba(255,255,255,0.07)] backdrop-blur-[7.5px] p-12 mb-4"
                                >
                                    <div className="font-bold text-2xl pb-6">{data.generation}</div>
                                    <div className="text-base leading-6">{data.description}</div>
                                    <div className="text-white text-base leading-6 text-opacity-50 font-light">
                                        {data.additionalDescription}
                                    </div>
                                </div>
                            )
                    )}
                </div>
                <div className="w-1/2">
                    {histories.map(
                        (data, index) =>
                            index % 2 === 1 && ( // 홀수 인덱스일 경우
                                <div
                                    key={data.id}
                                    className="rounded-[15px] border border-gray-700 bg-[rgba(255,255,255,0.07)] backdrop-blur-[7.5px] p-12 mb-4"
                                >
                                    <div className="font-bold text-2xl pb-6">{data.generation}</div>
                                    <div className="text-base leading-6 ">{data.description}</div>
                                    <div className="text-white text-base leading-6 text-opacity-50 font-light">
                                        {data.additionalDescription}
                                    </div>
                                </div>
                            )
                    )}
                </div>
            </div>
            <button
                onClick={handleAllClick}
                className="flex items-center justify-center gap-10 rounded-[15px] text-white px-6 py-2 max-w-[6em] max-h-[8em]"
                style={{ backgroundColor: '#1A5BFF' }}
            >
                접기
            </button>
        </div>
    ) : (
        <div className="flex flex-col items-center relative">
            <div className="flex flex-col items-center">
                <div className="flex gap-6 pt-[48px] mx-32">
                    <div className="w-1/2">
                        {histories.slice(0, 4).map(
                            (data, index) =>
                                index % 2 === 0 && ( // 짝수 인덱스일 경우
                                    <div
                                        key={data.id}
                                        className="rounded-[15px] border border-gray-700 bg-[rgba(255,255,255,0.07)] backdrop-blur-[7.5px] p-12 mb-4"
                                    >
                                        <div className="font-bold text-2xl pb-6">{data.generation}</div>
                                        <div className="text-base leading-6">{data.description}</div>
                                        <div className=" text-white text-base leading-6 text-opacity-50 font-light">
                                            {data.additionalDescription}
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                    <div className="w-1/2">
                        {histories.slice(0, 4).map(
                            (data, index) =>
                                index % 2 === 1 && ( // 홀수 인덱스일 경우
                                    <div
                                        key={data.id}
                                        className="rounded-[15px] border border-gray-700 bg-[rgba(255,255,255,0.07)] backdrop-blur-[7.5px] p-12 mb-4"
                                    >
                                        <div className="font-bold text-2xl pb-6">{data.generation}</div>
                                        <div className="text-base leading-6">{data.description}</div>
                                        <div className=" text-white text-base leading-6 text-opacity-50 font-light">
                                            {data.additionalDescription}
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
                style={{ backgroundColor: '#1A5BFF' }}
            >
                더보기
            </button>
        </div>
    );
}
