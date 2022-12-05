import React from "react";
import './Programming.css';
import Language from './Language.js';
import {LanguagesList} from './LanguagesList.js';

const ProgrammingList = LanguagesList.map((language, i) => {
    return <Language languageName={LanguagesList[i].name} image={LanguagesList[i].image}  />
})

const Programming = () => {
    return(
        <div className='Section Programming'>
            <div className='Title'><h1>&lt;Programming Languages/&gt;</h1></div>
            <div className='LanguagesContainer'>
                {ProgrammingList}
            </div>
        </div>
    );
};

export default Programming;