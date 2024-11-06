import '../styles/global.css';
import History from '../components/history';
import Sponsored from '../components/sponsored';
import Review from '../components/review';
import TaveLogo from '../assets/images/taveLogo.svg';
import valueOne from '../assets/icons/valueOne.svg';
import valueTwo from '../assets/icons/valueTwo.svg';
import valueThree from '../assets/icons/valueThree.svg';

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center mx-20 mt-[300px]">
            <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">
                    The new technology wave,
                </div>
                <img src={TaveLogo} className="w-[301px]" alt="taveLogo"></img>
                <div className="text-4xl font-medium mt-10">
                    기술의 물결 속에서 함께 성장하는 곳, TAVE
                </div>
            </div>
            <p className="text-4xl font-bold mt-[618px] text-center leading-[58px]">
                다양한 분야와의 융합을 통해 미래를 선도하는
                <br />
                IT 연합 동아리, TAVE를 소개합니다
            </p>
            <div className="mt-[618px]">
                <div className="flex flex-col items-center gap-4">
                    <div className="text-4xl font-bold">Core Value</div>
                    <div className="text-xl font-light">
                        TAVE 15기의 핵심가치를 소개합니다
                    </div>
                </div>
                <div className="flex gap-12 mt-[100px]">
                    <div className="w-[296px] h-[180px] bg-[#393a40]/50 rounded-[15px] relative border border-[#f7f8fa]">
                        <div className="text-2xl flex justify-center w-full items-center h-full font-bold z-40 absolute">
                            열정
                        </div>
                        <img
                            src={valueTwo}
                            alt="icon"
                            className="absolute z-10 right-0 bottom-0"
                        />
                    </div>
                    <div className="w-[296px] h-[180px] bg-[#393a40]/50 rounded-[15px] relative border border-[#f7f8fa] flex justify-center items-center">
                        <div className="text-2xl font-bold absolute z-20">
                            성장
                        </div>
                        <img
                            src={valueThree}
                            alt="icon"
                            className="absolute z-10"
                        />
                    </div>
                    <div className="w-[296px] h-[180px] bg-[#393a40]/50 rounded-[15px] relative border border-[#f7f8fa]">
                        <div className="text-2xl flex justify-center w-full items-center h-full font-bold z-40 absolute">
                            다양성
                        </div>
                        <img
                            src={valueOne}
                            alt="icon"
                            className="absolute z-10 left-0 bottom-0"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col pb-[88px] mt-[440px] justify-center items-center">
                <div className="text-4xl font-bold leading-[58px] pb-[16px]">
                    TAVE HISTORY
                </div>
                <div className="font-medium leading-[20px] mb-20">
                    TAVE 프로젝트의 활동 내역 및 수상 내역을 확인해보세요
                </div>
                <History></History>
            </div>
            <div className="flex flex-col py-[88px] justify-center items-center">
                <div className="text-4xl font-bold leading-[58px] pb-[16px]">
                    TAVE Review
                </div>
                <div className="font-medium leading-[20px] mb-20  text-center">
                    TAVE와 함께한 사람들의 후기를 들어보세요.
                    <Review></Review>
                </div>
            </div>
            <div className="flex flex-col py-[88px] justify-center items-center">
                <div className="text-4xl font-bold leading-[58px] pb-[16px]">
                    Sponsored by
                </div>
                <div className="font-medium leading-[20px] mb-[440px] text-center">
                    <div>TAVE와 함께하는 공식 파트너 단체입니다.</div>
                    <Sponsored />
                </div>
            </div>
        </div>
    );
}
