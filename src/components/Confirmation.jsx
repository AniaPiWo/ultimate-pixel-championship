import React from 'react';

export const Confirmation = ({ restartBtn }) => {
   return (
      <>
         <p>Confirmation screen</p>
         <button onClick={restartBtn}>Restart</button>
      </>
   );
};
