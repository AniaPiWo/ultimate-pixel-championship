import React from 'react';

export const Confirmation = ({ restartBtn }) => {
   return (
      <>
         <p className="confirmationText">
            Thank you for <br />
            signing up,
            <br />
            Commander
            <br />
            [Commander]!
         </p>
         <img src="./src/assets/img/Swords.png" />
         <button onClick={restartBtn}>
            <img src="./src/assets/img/submitAnother.png" alt="back button" />
         </button>
      </>
   );
};
