import React from 'react';

export const Form = ({ confirmBtn }) => {
   return (
      <>
         <p>Form screen</p>
         <button onClick={confirmBtn}>Next step</button>
      </>
   );
};
