import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Form = ({ chosenFighter, backBtn, openConfirmation }) => {
   const [email, setEmail] = useState('');
   const [name, setName] = useState('');

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
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      openConfirmation();
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
                  <img src="/src/assets/submitBtn.png" alt="submit button" />
               </button>
            </form>
            <button className="backBtn">
               <img src="/src/assets/backBtn.png" alt="back button" onClick={backBtn} />
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
