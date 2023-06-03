import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const Form = ({ chosenFighter, backBtn, openConfirmation }) => {
   const [email, setEmail] = useState('');
   const [name, setName] = useState('');

   return (
      <>
         <div className="formBox">
            <div>
               <p className="chosenFighter">chosen fighter</p>
               <p className="chosenFighterName">{chosenFighter}</p>
            </div>
            <form className="form" onSubmit={handleSubmit}>
               <label htmlFor="fighterInput" className="chosenFighter">
                  commander
               </label>
               <input
                  type="text"
                  className="fighterInput"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
               />
               <label htmlFor="fighterInput" className="chosenFighter">
                  email
               </label>
               <input
                  type="email"
                  className="fighterInput"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
               <button type="submit" className="submitBtn">
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
