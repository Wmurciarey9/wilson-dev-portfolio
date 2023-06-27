import React from "react";
import Car from "../images/Car-Rental-v2.png";
import Connectify from "../images/Connectify-FullPage.png";
import Ecommerce from "../images/eCom-fullPage.png";
import Netflix from "../images/netflix-singIn.png";
import { Project } from "../project/Project";
import "./projects.scss";

export const Projects = () => {
  return (
    <div className="projects">
      <span>PROJECTS</span>
      <Project
        title="Car Rental"
        img={Car}
        liveUrl="https://car-rental-wilreym.netlify.app/"
        gitHub="https://github.com/Wmurciarey9/car-rental-v2"
        description="Car rental. Fully functional and market ready. Personal or business needs, search and reserve your cars."
        techOne="React"
        techTwo="Saas"
        techThree="HTML"
        techFour="CSS"
        className="image car-rental-project"
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
        className="image ecom-project"
      />
      <Project
        title="Connectify - A meetup inspired clone"
        img={Connectify}
        liveUrl="https://wilreym-connectify.netlify.app/"
        gitHub="https://github.com/Wmurciarey9/connectify"
        description="Meetup inspired / clone. An app to connect people for diverse events. Implementing this in my country since we don't have meetup "
        techOne="React"
        techTwo="Saas"
        techThree="Strapi"
        techFour="MySQL"
        className="image connectify-project"
      />
      {/* <Project
        title="Booking App"
        img=""
        liveUrl=""
        gitHub=""
        description="I am building a clone for meetup. My intent is that in the future it can be it's own app with it's own features but similar workflow as meetup, since in Colombia we don't have something like that. I intend to create and deploy in stores eventually. "
        techOne="React"
        techTwo="Saas"
        techThree="Strapi"
        techFour="MySQL"
      /> */}
      <Project
        title="Netflix Clone"
        img={Netflix}
        liveUrl="https://wilsonmrey-netflix-clone.netlify.app/"
        gitHub="https://github.com/Wmurciarey9/clone-netflix-react"
        description="Cloned latest version UI of netflix. Added a navigation overlay to access all available pages (Login, Home, Profiles, Watch). This is only the front end site. Movie app with Netflix UI"
        techOne="React"
        techTwo="Saas"
        techThree="HTML"
        techFour="CSS"
        className="image netflix-project"
      />
    </div>
  );
};
////// /REAT SASS NODE MONGODB
