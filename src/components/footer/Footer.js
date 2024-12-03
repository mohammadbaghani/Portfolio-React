import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { logo } from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32 rounded-full" src={logo} alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/mihirc0111" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
          </span>
          <span className="bannerIcon">
          <a href="mailto:mihirc0111@gmail.com">
            <SiGmail /></a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/mihir-chavan-643615234/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn /></a>
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl text-designColor tracking-wider">
    لینک های مفید
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
  
             


        آموزش ریداکس
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
       آموزش تلویند
             
            </span>
          </li>
   
  
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
          
            آموزش ری اکت
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl text-designColor tracking-wider">
          نمونه کارهام
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
      

            سایت فروشگاهی
       
            
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
   
            سایت املاکی
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
     
            سایت زبانم
            </span>
          </li>
     
 
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl text-designColor tracking-wider">
مزیت ها
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            زبان انگلیسی قوی


  

            </span>
          </li>
          <li>
            <span className="w-full text-lg relative duration-300 group cursor-pointer">

             
            پرتلاش و مستعد
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

             

            بسیار اکتیو
            </span>
          </li>
  
   
        </ul>
      </div>
    </div>
  );
}

export default Footer