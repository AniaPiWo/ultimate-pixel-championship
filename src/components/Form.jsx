import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = ({ chosenFighter, confirmBtn, backBtn }) => {
   const [email, setEmail] = useState('');

   const emailValidation = (e) => {
      e.preventDefault();
      if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)) {
         toast('Invalid email!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
         });
         return;
      }
   };

   const toastyTest = (e) => {
      e.preventDefault();
      toast.error('Invalid email!', {
         position: 'top-center',
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: 'colored',
      });
      return;
   };

   return (
      <>
         <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
         />
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
               <button type="submit" className="submitBtn" onSubmit={confirmBtn}>
                  <img src="./src/assets/img/submitBtn.png" alt="submit button" />
               </button>
            </form>
            <button className="backBtn">
               <img
                  src="./src/assets/img/backBtn.png"
                  alt="back button"
                  /* onClick={backBtn} */ onClick={toastyTest}
               />
            </button>
         </div>
      </>
   );
};
