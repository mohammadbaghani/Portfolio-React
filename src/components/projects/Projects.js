import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="نمونه کارهام"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="سایت آموزشگاهی با ری اکت"
          des="
          استفاده کردم
         
  Mui , Bootstrap
     از کتابخانه های
          "
          src={projectOne}
          githubLink="https://github.com/mihirc0111/IPL-Predictor-Mihir"
          websiteLink="https://englisho.liara.run"

        />
        <ProjectsCard
          title="
   Next JS

   سایت فروشگاهی با 
          "
          des="این سایت را با نکست جی اس زدم
          و از تکنولوژی 
        
 استفاده کردم

   ssg
          "
          src={projectTwo}
          githubLink="https://github.com/mihirc0111/Mi-Blog-Van"
             websiteLink="https://shopy.liara.run"
        />
        <ProjectsCard
          title="سایت املاکی"
          des=" این سایت را با نکست جی اس زدم"
          src={projectThree}
          githubLink="https://github.com/mihirc0111/Secrets"
            websiteLink="https://ads.liara.run"
        />
      </div>
    </section>
  );
}

export default Projects