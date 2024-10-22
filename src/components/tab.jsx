// pr 병합 후 폰트, 파일 위치 적용
// 디자인팀 문의 후 렌더링 컴포넌트 적용
import { useState, useEffect } from "react";

export default function Tab({ category, onCategoryChange, initialState = 0 }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = index => {
    setSelectedIndex(index);
    onCategoryChange(category[index]);
  };

  useEffect(() => {
      setSelectedIndex(initialState); // 초기 상태를 설정
      onCategoryChange(category[initialState]); 
  }, [initialState]);

  return (
    <div className="flex flex-row gap-20">
      {category.map((name, index) => (
        <div
          key={index}
          className={`text-2xl font-bold leading-9 cursor-pointer ${
            selectedIndex === index ? "text-[#195bff]" : "text-white"
          }`}
          onClick={() => handleClick(index)}>
          {name}
        </div>
      ))}
    </div>
  );
}
