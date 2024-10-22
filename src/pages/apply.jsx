import Header from '../components/header';
import Footer from '../components/footer';
import wave from '../assets/images/wave.svg';

export default function Apply() {
    return (
        <>
            <Header />
            <div className="flex flex-col gap-[86px] mt-[200px] items-center z-30 ">
                <div className="flex flex-col gap-6 items-center px-4 break-keep text-center">
                    <p className="text-[38px] font-bold">
                        지금은 지원기간이 아닙니다
                    </p>
                    <p className="text-xl font-medium">
                        TAVE의 다음 모집에 관심 있으시다면 이메일을 남겨주세요!
                    </p>
                </div>
                <div className="relative flex items-center z-30 pb-96">
                    <input
                        type="email"
                        placeholder="이메일을 입력해주세요."
                        className="bg-[#121212]/40 opacity-80 border border-[#868b94] rounded-[80px]
                        py-7 pl-[50px] lg:text-2xl placeholder-[#868b94] w-96 lg:w-[807px]"
                    />
                    <button
                        className="absolute right-0 bg-white px-[33px] py-7 rounded-[80px] border
                        border-[#868b94] text-black lg:text-2xl font-bold"
                    >
                        알림 신청하기
                    </button>
                </div>
            </div>
            <img className="absolute w-full h-[1000px] top-0 inset-0 z-10" src={wave} alt="wave" />
            <Footer />
        </>
    );
}
