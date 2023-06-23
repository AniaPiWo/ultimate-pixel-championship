import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import submitBtnImg from '../assets/submitBtn.png';
import backBtnImg from '../assets/backBtn.png';

export const Form = ({ chosenFighter, backBtn, openConfirmation }) => {
   const [email, setEmail] = useState('');
   const [name, setName] = useState('');
   const [isEmailValid, setIsEmailValid] = useState(true);
   const [isNameValid, setIsNameValid] = useState(true);

   useEffect(() => {
      const storedName = localStorage.getItem('name');
      const storedEmail = localStorage.getItem('email');
      if (storedName) {
         setName(storedName);
      }
      if (storedEmail) {
         setEmail(storedEmail);
      }
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validateEmail(email)) {
         localStorage.setItem('name', name);
         localStorage.setItem('email', email);
         openConfirmation();
      } else if (name.length === 0) {
         setIsNameValid(false);
      } else {
         setIsEmailValid(false);
      }
   };

   const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
   };

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
                  className={`fighterInput ${isNameValid ? '' : 'invalid'}`}
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
               />
               <span className={`errorMsg ${isNameValid ? 'hidden' : ''}`}>
                  Enter your name commander!
               </span>
               <label htmlFor="fighterInput" className="chosenFighter">
                  email
               </label>
               <input
                  type="text"
                  className={`fighterInputEmail ${isEmailValid ? '' : 'invalid'}`}
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => {
                     setEmail(e.target.value);
                     setIsEmailValid(true);
                  }}
                  required
               />
               <span className={`errorMsg ${isEmailValid ? 'hidden' : ''}`}>
                  Enter a valid email address
               </span>
               <button type="submit" className="submitBtn">
                  <img src={submitBtnImg} alt="submit button" />
               </button>
            </form>
            <button className="backBtn">
               <img src={backBtnImg} alt="back button" onClick={backBtn} />
            </button>
         </div>
      </>
   );
};

Form.propTypes = {
   chosenFighter: PropTypes.string.isRequired,
   backBtn: PropTypes.func.isRequired,
   openConfirmation: PropTypes.func.isRequired,
};
