import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["کد نویس حرفه ای", "ری اکت دولوپر", "علاقه مند و سخت کوش"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
      
        <h1 className="text-6xl font-bold text-white">
        با من <span className="text-designColor capitalize"> بیشتر آشنا شوید</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
       <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        "من یک توسعه‌دهنده پرشور 
        
ری اکت و علاقه‌مند به یادگیری بیشتر هستم. با پایه‌ای قوی در توسعه وب و نگاهی دقیق به داده‌ها، راه‌حل‌های نوآورانه‌ای ایجاد می‌کنم که فناوری و تجربه کاربر را پیوند می‌دهند»
      
        </p>
      </div>

     <Media />
    </div>
  );
}

export default LeftBanner