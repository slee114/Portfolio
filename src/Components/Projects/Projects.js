import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsList } from "./ProjectsList.js";
import './Project.css';

const CardList = ProjectsList.map((project, i) => {
    return  <ProjectCard projectName={ProjectsList[i].name} projectDescription={ProjectsList[i].description} image={ProjectsList[i].image} link={ProjectsList[i].link} height={ProjectsList[i].height} />
})

const Projects = () => {
    return(
        <div className='Section Projects'>
            <div className='Title Project'><h1>&lt;Projects/&gt;</h1></div>
            {CardList}
        </div>
    );
};

export default Projects;