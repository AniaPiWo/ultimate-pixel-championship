import React from 'react';

export const Form = ({ chosenFighter, confirmBtn, backBtn }) => {
   return (
      <>
         <div className="formBox">
            <div>
               <p className="chosenFighter">chosen fighter</p>
               <p className="chosenFighterName">{chosenFighter}</p>
            </div>
            <form className="form">
               <label htmlFor="fighterInput" className="chosenFighter">
                  commander
               </label>
               <input type="text" className="fighterInput" placeholder="Your name" required />
               <label htmlFor="fighterInput" className="chosenFighter">
                  email
               </label>
               <input
                  type="text"
                  className="fighterInput"
                  placeholder="Your email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
                  required
               />
               <button type="submit" className="submitBtn" onSubmit={confirmBtn}>
                  <img src="./src/assets/img/submitBtn.png" alt="submit button" />
               </button>
            </form>
            <button className="backBtn">
               <img src="./src/assets/img/backBtn.png" alt="back button" onClick={backBtn} />
            </button>
         </div>
      </>
   );
};
