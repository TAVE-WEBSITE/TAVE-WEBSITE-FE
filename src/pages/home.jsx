import '../styles/global.css';
import History from '../components/history';
import Sponsored from '../components/sponsored';
import Review from '../components/review';
import LogoTave from '../assets/images/LogoTave.svg';
import CoreCard from '../components/coreCard';
import Growth from '../assets/icons/Growth.jsx';
import Passion from '../assets/icons/Passion.jsx';
import Diversity from '../assets/icons/Diversity.jsx';
export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center mx-20 mt-[300px]">
            <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">
                    The new technology wave,
                </div>
                <img src={LogoTave} className="w-[301px]" alt="taveLogo"></img>
                <div className="text-4xl font-medium mt-10 text-center">
                    기술의 물결 속에서 함께 성장하는 곳, TAVE
                </div>
            </div>
            <p className="text-4xl font-bold mt-[618px] text-center leading-[58px]">
                다양한 분야와의 융합을 통해 미래를 선도하는
                <br />
                IT 연합 동아리, TAVE를 소개합니다
            </p>
            <div className="mt-[618px] w-full">
                <div className="flex flex-col items-center gap-4">
                    <div className="text-4xl font-bold">Core Value</div>
                    <div className="text-xl font-light">
                        TAVE 15기의 핵심가치를 소개합니다
                    </div>
                </div>
                <div className="flex gap-12 mt-[100px] w-full px-[148px]">
                    <CoreCard
                        title="열정"
                        description={
                            <p>
                                열정으로 뭉친 TAVE는 새로운 기술을
                                <br />
                                탐험하고 혁신의 경계를 넓혀갑니다.
                            </p>
                        }
                        className="right-0 bottom-0"
                        SvgIcon={<Passion />}
                    />
                    <CoreCard
                        title="성장"
                        description={
                            <p>
                                함께 배우고 경험하며, 개인과 팀의 성장
                                <br />
                                모두를 이끌어가는 공간입니다.
                            </p>
                        }
                        SvgIcon={<Growth />}
                    />
                    <CoreCard
                        title="다양성"
                        description={
                            <p>
                                다양한 분야의 융합을 통해
                                <br />
                                새로운 가능성을 탐색합니다.
                            </p>
                        }
                        className="left-0 bottom-0"
                        SvgIcon={<Diversity />}
                    />
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
