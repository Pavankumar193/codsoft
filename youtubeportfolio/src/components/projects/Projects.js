import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Apartment management system"
          des="This system includes features such as managing tenant information, rent payments, maintenance 
              requests, and even amenities like parking spaces or common areas"
          src={projectOne}
          github="https://github.com/Pavankumar193/Apartment-management-system"
        />
        <ProjectsCard
          title="E waste management system"
          des="Designed and implemented an interactive platform where users could learn about the environmental 
              impact of e-waste, locate nearby recycling centers, and schedule pickups for their electronic waste."
          src={projectTwo}
          github="https://github.com/Pavankumar193/e-waste-management"
        />
        <ProjectsCard
          title="Virtual Keyboard "
          des="The application effectively tracks hand positions and accurately identifies keystrokes, ensuring a 
              seamless and efficient typing experience."
          src={projectThree}
          github="https://github.com/Pavankumar193/Virtual-Keyboard"
        />
      </div>
    </section>
  );
}

export default Projects