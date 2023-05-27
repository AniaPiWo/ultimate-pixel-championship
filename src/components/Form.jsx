import React from 'react';

export const Form = () => {
   return (
      <>
         <div className="formBox">
            <div>
               <p>chosen fighter</p>
               <p>Sikaczu</p>
            </div>
            <form>
               <label htmlFor="fighterInput">chosen fighter</label>
               <input type="text" id="fighterInput" placeholder="Your name" />
               <label htmlFor="fighterInput">chosen fighter</label>
               <input type="text" id="fighterInput" placeholder="Your name" />
            </form>
         </div>
      </>
   );
};
