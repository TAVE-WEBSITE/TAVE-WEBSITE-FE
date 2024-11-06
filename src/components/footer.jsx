import bold from '../assets/icons/bold.svg';
import instagram from '../assets/icons/instagram.svg';
import mail from '../assets/icons/mail.svg';
import message from '../assets/icons/message.svg';

export default function Footer() {
    return (
        <footer className="relative mx-0 bottom-0 w-full flex px-36 py-10 z-50 justify-between bg-[#393A40]">
            <div className="flex flex-col gap-4 text-[#A7A7A7]">
                <p className="mb-4">TECHNOLOGY WAVE</p>
                <p>TAVE (4차 산업혁명 연합 동아리)</p>
                <p>ⓒ TAVE. 2018 - 2024 All Rights Reserved</p>
            </div>
            <div className="flex gap-2.5 items-end">
                <img src={message} alt="message" />
                <img src={mail} alt="mail" />
                <a href="https://www.instagram.com/tave_wave/" target="_blank">
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="https://blog.naver.com/t-ave" target="_blank">
                    <img src={bold} alt="bold" />
                </a>
            </div>
        </footer>
    );
}
