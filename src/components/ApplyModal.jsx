import React, { useEffect } from "react";

const ApplyModal = ({ setIsModal, title, text }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60 z-50">
      <div className="bg-white rounded-[18px] p-8 flex flex-col justify-center items-center gap-3 shadow-lg w-auto inline-flex scale-75 md:scale-100">
        <p className="text-black text-[22px] font-bold leading-[30px] tracking-[-0.99px] font-pretendard">
          {title}
        </p>
        <p className="text-black text-[20px] font-medium leading-[30.6px] tracking-[-0.9px] opacity-60 text-center font-pretendard pb-3">
          {text}
        </p>
        <button
          className="bg-blue-600 text-white w-[351px] py-4 rounded-lg hover:bg-blue-700 transition flex justify-center items-center gap-2 text-[20px] font-bold leading-[24px] tracking-[-0.7px] font-pretendard"
          onClick={setIsModal}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default ApplyModal;
