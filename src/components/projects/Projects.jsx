import React from "react";
import { Project } from "../project/Project";
import "./projects.scss";
import Ecommerce from "../images/eCommerce.png";

export const Projects = () => {
  return (
    <div className="projects">
      <span>PROJECTS</span>
      <Project
        title="Netflix Clone"
        img="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&w=1000&q=80"
        liveUrl="https://wilsonmrey-netflix-clone.netlify.app/"
        gitHub="https://github.com/Wmurciarey9/clone-netflix-react"
        description="Cloned latest version UI of netflix. Added a navigation overlay to access all available pages. (Login, Home, Profiles, Watch) This is only the front end site. I have a full stack version with it's own database. Login and register process working. Also an admin exclusive dashboard to manage. Only issue is that there is no movies inside the database. "
        techOne="React"
        techTwo="Saas"
        techThree="HTML"
        techFour="CSS"
      />
      <Project
        title="Ecommerce Store"
        img={Ecommerce}
        liveUrl="https://wilreym-ecom.netlify.app/"
        gitHub="https://github.com/Wmurciarey9/eCommerce-store"
        description="Completely functional eCommerce store website. In this case I set up a wallet store. New items can be added throught the admin site if you are registered as an admin. It also manages cart updates and processes payments."
        techOne="React"
        techTwo="Saas"
        techThree="Strapi"
        techFour="MySQL"
      />
    </div>
  );
};
////// /REAT SASS NODE MONGODB
