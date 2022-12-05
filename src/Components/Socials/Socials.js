import React from "react";
import './Socials.css';
import github from './GitHub-Mark-Light-32px.png';
import linkedin from './Linkedin.png';

const Socials = () => {
    return(
        <div className='SocialsContainer longer'>
            <div className='vlContainer '>
                <div className='vl longersocialvl'></div>
            </div>
            <div className='Socials'>
                <a href='https://www.linkedin.com/in/sean-lee-b93a70233'><img src={linkedin} alt='linkedin' height='20px'></img></a>
            </div>
            <div className='Socials'>
                <a href='https://github.com/slee114'><img src={github} alt='github' height='20px'></img></a>
            </div>
            <div className='vlContainer '>
                <div className='vl socialvl'></div>
            </div>
        </div>
    );
};

export default Socials;