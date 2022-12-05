import React from "react";

const Language = (props) => {
    return(
        <div className="LanguageCard">
            <div className='LanguageTitle'>
                <h3>{props.languageName}</h3>
            </div>
            <div className='LanguageImage'>
                <img src={props.image} alt='Programming Language' height='150px'></img>
            </div>
        </div>
    );
};

export default Language;