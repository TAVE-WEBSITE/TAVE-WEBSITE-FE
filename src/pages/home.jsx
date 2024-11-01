import "../styles/global.css";
import History from "../components/history";
import Footer from "../components/footer";
import Sponsored from "../components/sponsored";
import Review from "../components/review";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mx-20">
      <div className="flex flex-col py-[88px] justify-center items-center">
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
        <div className="font-medium leading-[20px] mb-20 text-center">
          <div>TAVE와 함께하는 공식 파트너 단체입니다.</div>
          <Sponsored />
        </div>
      </div>
      <Footer />
    </div>
  );
}
