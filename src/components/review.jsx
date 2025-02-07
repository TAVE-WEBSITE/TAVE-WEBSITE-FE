import { ReactComponent as ReviewIcon } from '../assets/images/ReviewIcon.svg';
import { ReactComponent as ArrowIcon } from '../assets/images/ArrowIcon.svg';
import { useState, useEffect } from 'react';
import { getPublicReview } from '../api/homeApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import '../styles/swiper.css';

//백엔드 후기 개수 8개로 제한 부탁
//줄 바꿈 백엔드랑 고민
//스와이프 중복 태그 추후 수정 필요

export default function Review() {
    const [reviews, setReviews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await getPublicReview();
            setReviews(response || []);
        };
        fetchReviews();
    }, []);

    const canNext = currentIndex + 2 < (reviews?.length || 0);
    const canPrev = currentIndex > 0;

    const nextSlide = () => {
        if (canNext) {
            setCurrentIndex((prevIndex) => prevIndex + 2);
        }
    };

    const prevSlide = () => {
        if (canPrev) {
            setCurrentIndex((prevIndex) => prevIndex - 2);
        }
    };

    const groupingReviews = (reviews) => {
        let grouped = [];
        for (let i = 0; i < reviews.length; i += 2) {
            grouped.push({
                review1: reviews[i],
                review2: reviews[i + 1] || null,
            });
        }
        return grouped;
    };
    const swiperReviews = groupingReviews(reviews);

    return (
        <div className="w-full">
            <div className="block md:hidden px-3">
                <Swiper spaceBetween={64} pagination={{ clickable: true }} modules={[Pagination]}>
                    {swiperReviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col gap-6 mb-8">
                                <div className="flex flex-col items-start">
                                    <div className="p-4 rounded-[10px] w-[85%] md:w-[60%] bg-white/5">
                                        <p className="text-xs mb-3 font-bold">
                                            {review.review1.nickname}
                                            <span className="text-[#adb1ba] ml-1">
                                                {review.review1.generation}기 {review.review1.field}
                                                {review.review1.companyName ? `/${review.review1.companyName}` : ''}
                                            </span>
                                        </p>
                                        <div className="text-xs font-normal">{review.review1.content}</div>
                                    </div>
                                    <ReviewIcon className="scale-x-[-1]" />
                                </div>
                                {review.review2 && (
                                    <div className="flex flex-col items-end">
                                        <div className="p-4 rounded-[10px]  w-[85%] md:w-[60%] bg-white/5">
                                            <p className="text-xs mb-3 font-bold">
                                                {review.review2.nickname}
                                                <span className="text-[#adb1ba] ml-1">
                                                    {review.review2.generation}기 {review.review2.field}
                                                    {review.review2.companyName ? `/${review.review2.companyName}` : ''}
                                                </span>
                                            </p>
                                            <div className="text-xs font-normal">{review.review2.content}</div>
                                        </div>
                                        <ReviewIcon />
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="hidden md:flex gap-16 items-center">
                <button type="button" onClick={prevSlide} disabled={!canPrev} className="disabled:cursor-not-allowed">
                    <ArrowIcon />
                </button>
                <div className="flex flex-col w-full " style={{ gap: 'clamp(1rem, 10vh, 40px)' }}>
                    {reviews.slice(currentIndex, currentIndex + 2).map(
                        (review, index) =>
                            review && (
                                <div>
                                    <div
                                        className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                                        key={index}
                                    >
                                        <div className="p-8 rounded-[10px] xl:w-[70%] lg:w-[80%] md:w-[85%] bg-white/5">
                                            <p className="text-2xl mb-6 font-bold">
                                                {review.nickname}
                                                <span className="text-[#adb1ba] ml-2">
                                                    {review.generation}기 {review.field}
                                                    {review.companyName ? `/${review.companyName}` : ''}
                                                </span>
                                            </p>
                                            <div className="text-xl font-medium">{review.content}</div>
                                        </div>
                                    </div>
                                    {index % 2 === 0 ? (
                                        <ReviewIcon className="scale-x-[-1]" />
                                    ) : (
                                        <div className="flex justify-end">
                                            <ReviewIcon />
                                        </div>
                                    )}
                                </div>
                            )
                    )}
                </div>
                <button type="button" onClick={nextSlide} disabled={!canNext} className="disabled:cursor-not-allowed">
                    <ArrowIcon className="scale-x-[-1]" />
                </button>
            </div>
        </div>
    );
}
