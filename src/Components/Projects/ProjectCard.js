import React from "react";
import github from '../Socials/GitHub-Mark-Light-32px.png';



const ProjectCard = (props) => {
    return(
        <div className='Container ProjectContainer'>
            <div className="ProjectLeft">
                <div>
                    <div className="vl projectvl"></div>
                </div>
                <div className='ProjectText'>
                    <div className="ProjectTitle">
                        <h2>{props.projectName}</h2>
                    </div>
                    <div className="ProjectDescription">
                        <h3>{props.projectDescription}</h3> <br/>
                        <a href={props.link}><img src={github} height='20px' alt='github'></img></a>
                </div>
                </div>
            </div>
            <div className='ProjectRight BottomLine'>
                <div class='ProjectImage'>
                    <img src={props.image} alt='projectimage' height={props.height}></img>
                </div>
            </div>
            <div className='vl-r'></div>
        </div>
    );
};

export default ProjectCard;