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
                        <p>Hi there! My name is Sean Lee and I am a Second-year Computer Information Systems Student at Cal Poly Pomona with an emphasis in Application Development! I started off at Cal Poly as undeclared major with the intention of becoming a Urban and Regional Planning major. However, after 
                            trying out Java for the first time on Codeacademy in the spring of 2022, I immediately developed a passion for coding and software engineering and decided that Computer Information Systems was right for me!</p>
                        <p>I now know how to code in Python, Javascript, React.js, HTML, and CSS! In my free time I like to self-study and build personal programming projects to enhance my software engineering skills. I am currently seeking Frontend Engineering internship for this summer am excited to put my skills to use in the industry.
                             I really enjoy learning about/making software that is scalable, reliable, and maintainable and am looking forward to becoming a professional Software Engineer in the future. I hope you enjoy learning more about me and my projects and would like to thank you for
                             checking out my portfolio webpage!
                            </p>
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