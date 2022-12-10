import React from "react";
import './Bio.css';
import myPic from './mypic.png';

const Bio = () => {
    return(
        <div className='Section Bio'>
            <div className="Container">
                <div className="vl"></div>
                <div className='BioTextContainer'>
                    <div className="Title">
                        <h1>&lt;About Me/&gt;</h1>
                    </div>
                    <div className="BioTextBody">
                        <p>Hi there! My name is Sean Lee and I am a second-year Computer Information Systems Student at Cal Poly Pomona with an emphasis in Application Development! I started off at Cal Poly Pomona as an undeclared major with the intention of becoming an Urban and Regional Planning major. However, after trying out Java for the first time on Codeacademy, I immediately developed a passion for coding and software engineering. Since then it has become my goal to become a professional software engineer!</p>
                        <p>  I now know how to code in Python, Javascript, React.js, HTML, and CSS. In my free time, I like to self-study and build personal programming projects to enhance my software engineering skills. I am seeking a Frontend Engineering internship to gain more professional experience, so if you are interested in a reliable and hard-working candidate, feel free to contact me. I am excited to put my skills to use in a professional setting and enjoy learning about, as well as making, scalable, reliable, and maintainable software. Seeing my progress as a self-taught programmer and the magnitude in which software has advanced has pushed me to work hard toward my career. I hope you enjoy learning more about me and my projects and I would like to thank you for checking out my portfolio webpage!</p>
                    </div>
                </div>
                <div className="BioImageContainer BottomLine">
                  <img src={myPic} alt='myPic' height='200px'></img>
                </div>
                <div className="vl-r"></div>
            </div>
        </div>
    );
};

export default Bio;
