import Header from "../components/header";
import BackWave from "../assets/images/BackWave.svg";
import Footer from "../components/footer";
import { postEmail } from "../api/emailApi";
import { useState } from "react";
import ApplyModal from "../components/ApplyModal";

export default function Apply() {
  const [isModal, setIsModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [modalText, setModaltext] = useState(["", ""]);
  // 백엔드 연결 필요

  const emailhandler = async () => {
    try {
      const emailData = { email: inputValue };
      const response = await postEmail(emailData); // API 요청 후 응답 대기
      if (response?.status === 200) {
        //alert(response.message); // 성공 메시지 알림
        setModaltext(["알림 신청 완료", `이메일 알림 신청에\n성공했습니다.`]);
      }
      setInputValue(""); // 전송 후 입력값 초기화
      setIsModal(true);
    } catch (error) {
      if (error.response?.status === 500) {
        setModaltext([
          "이메일 알림 중복",
          `이미 모집 알림이 등록된\n이메일입니다.`,
        ]);
        //alert("이미 모집 알림이 등록된 이메일입니다.");
      } else {
        setModaltext([
          "이메일 입력 오류",
          error.response?.data?.message || "이메일 전송에 실패하였습니다.",
        ]);
        //alert(error.response?.data?.message || "이메일 전송에 실패하였습니다.");
      }
      setIsModal(true);
    }
  };

  const inputChange = (e) => {
    const value = e.target.value.trim();
    setInputValue(value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex1 flex flex-col gap-32 mt-40 z-30 px-4">
        <div className="flex flex-col gap-3 md:gap-6 items-center px-4 break-keep text-center">
          <p className="text-3xl font-bold leading-relaxed">
            지금은 지원기간이 아닙니다
          </p>
          {/* PC 문구 */}
          <p className="hidden md:flex text-xl font-medium">
            TAVE의 다음 모집에 관심 있으시다면 이메일을 남겨주세요!
          </p>
          {/* 모바일 문구 */}
          <p className="md:hidden text-base font-normal">
            TAVE의 다음 모집에 관심 있으시다면 <br /> 이메일을 남겨주세요!
          </p>
        </div>

        <div className="relative flex justify-center items-center z-30 mb-64 w-full lg:w-[807px] mx-auto">
          <input
            type="email"
            placeholder="이메일을 입력해주세요."
            value={inputValue}
            onChange={inputChange}
            className="bg-[#121212]/40 opacity-80 border border-[#868b94] rounded-[80px] py-5 md:py-7 pl-6 md:pl-[50px] text-sm md:text-2xl placeholder-[#868b94] w-full md:w-96 lg:w-[807px] focus:outline-none"
          />
          <button
            className="absolute right-0 bg-white px-4 md:px-[33px] py-[1.1rem] md:py-7 rounded-[40px] md:rounded-[80px] border border-[#868b94] text-black lg:text-2xl font-bold"
            onClick={emailhandler}
          >
            알림 신청하기
          </button>
        </div>
      </div>
      <img
        className="absolute w-full h-full top-0 inset-0 z-10"
        src={BackWave}
        alt="wave"
      />
      {isModal && (
        <ApplyModal
          setIsModal={() => setIsModal(false)}
          title={modalText[0]}
          text={modalText[1]}
        />
      )}
      <Footer />
    </div>
  );
}
