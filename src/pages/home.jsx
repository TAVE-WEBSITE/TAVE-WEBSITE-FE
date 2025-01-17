import '../styles/global.css';
import History from '../components/history';
import Sponsored from '../components/sponsored';
import Review from '../components/review';
import LogoTave from '../assets/images/LogoTave.svg';
import CoreCard from '../components/home/coreCard.jsx';
import Growth from '../assets/icons/Growth.jsx';
import Passion from '../assets/icons/Passion.jsx';
import Diversity from '../assets/icons/Diversity.jsx';
import styles from '../styles/home.module.css';
import CoreValueCarousel from '../components/home/coreValueCarousel.jsx';
import ArrowDown from '../assets/icons/ArrowDown.svg';

//반복되는 부분 모듈화

export default function Home() {
    return (
        //overflow-y-auto
        <div className="relative mx-auto break-keep">
            <div className={styles.gradientWrapper} />
            <div className="flex flex-col justify-center items-center w-full md:px-20 px-5">
                <div className="flex flex-col items-center h-screen justify-center">
                    <div className="md:text-2xl text-base font-light mt-20">The new technology wave,</div>
                    <img src={LogoTave} className="w-[301px]" alt="taveLogo"></img>
                    <div className="hidden md:inline font-medium mt-10 text-center md:title-2">
                        기술의 물결 속에서 함께 성장하는 곳, TAVE
                    </div>
                    <div className="md:hidden font-medium mt-10 text-center text-2xl">
                        기술의 물결 속에서 함께
                        <br />
                        성장하는 곳, TAVE
                    </div>
                    <button
                        className="md:hidden mt-20 py-3.5 px-4 text-white text-center font-semibold text-[18px] "
                        style={{
                            borderRadius: '12px',
                            background:
                                'linear-gradient(102deg, #6D3CFF -2.19%, #1A5BFF 100%), linear-gradient(262deg, #64B4FF 16.37%, #1A5BFF 103.22%, #003BD0 196.21%, #1629B8 283.61%)',
                            fontFamily: 'Pretendard',
                        }}
                    >
                        지금 바로 지원하기
                    </button>
                </div>

                <div className="h-screen w-full flex flex-col items-center justify-center ">
                    <p className="hidden md:inline text-center my-[610px] md:title-1 text-xl font-semibold leading-6 tracking-[-0.9px]">
                        다양한 분야와의 융합을 통해 미래를 선도하는
                        <br /> IT 연합 동아리, TAVE를 소개합니다
                    </p>
                    <p className="md:hidden text-center text-lg font-semibold leading-8 tracking-[-0.9px]">
                        다양한 분야와의 융합을 통해
                        <br />
                        미래를 선도하는 IT 연합 동아리,
                        <br />
                        TAVE를 소개합니다
                    </p>
                    <img src={ArrowDown} className="md:hidden mb-8 mt-12" />
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-4xl font-bold title-1">Core Value</div>
                        <div className="text-xl font-light body-light font-Pretendard">
                            TAVE의 핵심가치를 소개합니다
                        </div>
                    </div>
                    <div className="hidden md:scale-75 lg:scale-95  md:flex gap-4 mt-12 px-4 md:gap-12 md:mt-[100px] md:px-[148px]">
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
                    <div className="md:hidden w-full h-72 mt-16">
                        <CoreValueCarousel />
                    </div>
                </div>

                <div className="h-screen flex flex-col justify-center items-center">
                    <div className="text-4xl font-bold leading-[58px] pb-[16px]">TAVE HISTORY</div>
                    <div className="font-medium leading-[20px] mb-20 text-center text-base font-normal md:text-xl md:font-medium">
                        TAVE 프로젝트의 활동 내역 및<br className="sm:hidden" /> 수상 내역을 확인해보세요
                    </div>
                    <History></History>
                </div>
                <div className="h-screen flex flex-col justify-center items-center w-full">
                    <div className="text-3xl font-bold mb-4">TAVE REVIEW</div>
                    <div className="text-lg font-normal text-center">
                        <span className="block md:inline">TAVE에 참여한 사람들의</span>
                        <span className="block md:inline"> 후기를 들어보세요.</span>
                    </div>
                    <Review />
                </div>

                <div className="h-screen flex flex-col justify-center items-center w-full">
                    <div className="text-3xl font-bold mb-4">SPONSORED BY</div>
                    <div className="text-lg font-normal text-center">
                        <span className="block md:inline">TAVE와 함께하는</span>
                        <span className="block md:inline"> 공식 파트너 단체입니다.</span>
                    </div>
                    <Sponsored />
                </div>
            </div>
        </div>
    );
}
