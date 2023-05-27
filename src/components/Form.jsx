import React from 'react';

export const Form = () => {
   return (
      <>
         <div className="formBox">
            <div>
               <p className="chosenFighter">chosen fighter</p>
               <p className="chosenFighterName">Sikaczu</p>
            </div>
            <form className="form">
               <label htmlFor="fighterInput" className="chosenFighter">
                  commander
               </label>
               <input type="text" className="fighterInput" placeholder="Your name" />
               <label htmlFor="fighterInput" className="chosenFighter">
                  email
               </label>
               <input type="text" className="fighterInput" placeholder="Your email" />
               <img
                  className="submitBtn"
                  src="./src/assets/img/submitBtn.png"
                  alt="submit button"
               />
            </form>
            <img className="backBtn" src="./src/assets/img/backBtn.png" alt="back button" />
         </div>
      </>
   );
};
