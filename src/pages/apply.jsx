import Header from '../components/header';
import BackWave from '../assets/images/BackWave.svg';
import Footer from '../components/footer';

export default function Apply() {
    // 백엔드 연결 필요
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
                        TAVE의 다음 모집에 관심 있으시다면 <br/> 이메일을 남겨주세요!
                    </p>
                </div>

                <div className="relative flex justify-center items-center z-30 mb-64 w-full lg:w-[807px] mx-auto">
                    <input
                        type="email"
                        placeholder="이메일을 입력해주세요."
                        className="bg-[#121212]/40 opacity-80 border border-[#868b94] rounded-[80px]
                        py-5 md:py-7 pl-6 md:pl-[50px] text-sm md:text-2xl placeholder-[#868b94] w-full md:w-96 lg:w-[807px] focus:outline-none"
                    />
                    <button
                        className="absolute right-0 bg-white px-4 md:px-[33px] py-[1.1rem] md:py-7 rounded-[40px] md:rounded-[80px] border
                        border-[#868b94] text-black lg:text-2xl font-bold"
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
            <Footer />
        </div>
    );
}
