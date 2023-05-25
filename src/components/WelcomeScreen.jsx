import React from 'react';
import '/src/App.css';

export const WelcomeScreen = ({ chooseBtn }) => {
   return (
      <>
         <div className="welcomeBox">
            <h1 className="welcomeTitleTop">
               Ultimate Pix <span className="welcomeTitleBottom">Championships</span>
            </h1>
            <img src="./src/assets/img/Swords.png" />
            <p className="welcomeText">
               Fill out the form to sign up
               <br />
               for upcoming tournee.
            </p>
            <img src="./src/assets/img/chooseBtn.png" className="chooseBtn" onClick={chooseBtn} />
         </div>
      </>
   );
};
