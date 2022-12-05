import React from "react";
import './NavBar.css';

const NavBar = () => {
    return(
        <div className='nav'>
            <div className='logo'>&lt;SL/&gt;</div>
            <div className='NavButtonsContainer'>
                <a className ='NavButton' href="">About Me</a>
                <a className ='NavButton' href="">Programming</a>
                <a className ='NavButton' href="">Work Experience</a>
            </div>
        </div>
    );
};

export default NavBar;