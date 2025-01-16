import ReviewIcon from "../assets/images/ReviewIcon.svg";
import React, { useState, useEffect } from "react";
import { getPublicReview } from "../api/homeApi";

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPublicReview();
      setReviews(response);
    };
    fetchData();
  }, []);

  const canNext = currentIndex + 2 < (reviews?.length || 0);
  const canPrev = currentIndex > 0;

  const paddedReview = reviews?.length > 0 ? [...reviews, ...Array(2).fill(null)] : [];
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

  return (
    <div className="flex gap-x-20 w-full">
      <button
        type="button"
        onClick={prevSlide}
        disabled={canNext}
        className="disabled:cursor-not-allowed"
      >
        <img src={ReviewIcon} />
      </button>
      <div className="flex flex-col gap-y-12 w-full">
        {paddedReview.slice(currentIndex, currentIndex + 2).map(
          (review, index) =>
            review && (
              <div
                className={`w-full flex-grow flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                key={index}
              >
                <div
                  className="relative text-white text-left p-8 rounded-lg w-[63%] shadow-lg"
                  style={{
                    background: "var(--tinted-base, rgba(255, 255, 255, 0.07))",
                  }}
                >
                  <p className="text-2xl mb-6">
                    {review.nickname}
                    <span className="text-gray-400 ml-2">
                      {review.generation} {review.field}
                    </span>
                  </p>
                  <div className="text-[20px] leading-8">{review.content}</div>
                  <div
                    className={`${
                      index % 2 === 0
                        ? "left-10  border-l-20 border-r-8"
                        : "right-10 border-l-8 border-r-20"
                    }
                                    absolute bottom-[-10px] w-0 h-0 border-t-8 border-l-transparent border-r-transparent border-t-gray-800`}
                  />
                </div>
              </div>
            )
        )}
      </div>
      <button
        type="button"
        onClick={nextSlide}
        disabled={canPrev}
        className="disabled:cursor-not-allowed"
      >
        <img src={ReviewIcon} className="scale-x-[-1]" />
      </button>
    </div>
  );
}
