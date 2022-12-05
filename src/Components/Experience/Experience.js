import React from "react";
import './Experience.css';
import cpp from './primary-logo-horizontal-stacked.png';

const Experience = () => {
    return(
        <div className='Section Experience'>
                <div className='Container'>
                    <div className='vl'></div>
                    <div className="ExperienceLeft">
                        <div className="ExperienceTopLeft Title">
                            <h1>&lt;Work Experience/&gt;</h1>
                        </div>
                        <div className="ExperienceImage">
                            <img src={cpp} alt='cpp' height='150px'></img>
                        </div>
                    </div>
                    <div className='ExperienceText BottomLine'>
                        <div className="ExperienceTopRight">
                        <h2 className='JobTitle'>IT Desktop Support - Student Assistant</h2>
                        <span>Cal Poly Pomona Department of IT & IP Services <br/> June 2022 - Present</span>
                        </div>
                        <p className='Description'>My main role as a IT Desktop Support Student Assistant is to maintain the infrastructure of Cal 
                            Poly Pomona by imaging and maintaining hardware that is used by both faculty and staff. <br/>
                            Here are some of my greatest achievements in this position:
                            <ul className='greatestAchievements'>
                                <li>I have streamlined the integration, surveyance, and upkeep of 100+ desktops for the college of Engineering which reduced a 4-month project to 1.5 months.</li>
                                <li>Coordinated with 5+ technicians and student assistants to implement a new organizational system that allowed all IT technicians within the Desktop Support team to locate and deliver imaged equipment efficiently.</li>
                                <li>And also imaged and encrypted 300+ devices for faculty, staff, and students including tablets, desktops, and laptops.</li>
                            </ul>
                        </p>
                    </div>
                    <div className='vl-r'></div>
                </div>
            </div>
    );
};

export default Experience;