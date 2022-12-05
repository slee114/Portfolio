import React from "react";
import './NavBar.css';
import {Link} from 'react-scroll';

const NavBar = () => {
    return(
        <div className='nav'>
            <Link to="Main" spy={true} smooth={true} duration={500} offset={-100}><div className='logo NavButton'>&lt;SL/&gt;</div></Link>
            <div className='NavButtonsContainer'>
                <Link className ='NavButton' to="Bio" spy={true} smooth={true} duration={500} offset={250} >About Me</Link>
                <Link className ='NavButton' to="Experience" spy={true} smooth={true} duration={500} offset={300} >Experience</Link>
                <Link className ='NavButton' to="Programming" spy={true} smooth={true} duration={500} offset={250} >Programming</Link>
                <Link className ='NavButton' to="Projects" spy={true} smooth={true} duration={500} offset={300} >Projects</Link>
                <Link className ='NavButton' to="ContactMe" spy={true} smooth={true} duration={500} offset={250} >Contact Me!</Link>
            </div>
        </div>
    );
};

export default NavBar;