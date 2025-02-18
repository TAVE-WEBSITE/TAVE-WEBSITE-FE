import { ReactComponent as BlogIcon } from '../assets/images/BlogIcon.svg';
import { ReactComponent as InstaIcon } from '../assets/images/InstaIcon.svg';
import { ReactComponent as MailIcon } from '../assets/images/MailIcon.svg';
import { ReactComponent as MessageIcon } from '../assets/images/MessageIcon.svg';
import dayjs from 'dayjs';

//메세지 메일 링크 달기

export default function Footer() {
    const currentYear = dayjs().year();

    return (
        <footer
            className="w-full flex z-50 justify-between bg-[#393A40]
         md:px-36 md:py-10 px-6 py-7"
        >
            <div
                className="flex flex-col text-[#A7A7A7]
                text-[13px] font-normal"
            >
                <p className="md:mb-8 mb-4 font-bold">TECHNOLOGY WAVE</p>
                <p className="md:mb-4 mb-1">
                    TAVE (4차 산업혁명 <span className="whitespace-nowrap">연합 동아리)</span>
                </p>
                <p>ⓒ TAVE. 2018 - {currentYear} All&nbsp;Rights&nbsp;Reserved</p>
            </div>
            <div className="flex gap-2.5 md:items-end items-start">
                <a href="" target="_blank">
                    <MessageIcon />
                </a>
                <a href="" target="_blank">
                    <MailIcon />
                </a>
                <a href="https://www.instagram.com/tave_wave/" target="_blank">
                    <InstaIcon />
                </a>
                <a href="https://blog.naver.com/t-ave" target="_blank">
                    <BlogIcon />
                </a>
            </div>
        </footer>
    );
}
