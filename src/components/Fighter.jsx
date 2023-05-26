import React from 'react';

export const Fighter = ({ name, health, attack, special, weakness, formBtn, imageSrc }) => {
   return (
      <>
         <div className="fighterBox">
            <img src={`./src/assets/img/${imageSrc}`} alt="fighter" className="fighterImg" />
            <p className="fighterName">{name}</p>
            <div className="statBox">
               <div>
                  <p className="statName">health</p>
                  <p className="statValue">{health}</p>
               </div>
               <div>
                  <p className="statName">attack</p>
                  <p className="statValue">{attack}</p>
               </div>
            </div>
            <div>
               <p className="statName">special attack</p>
               <p className="statValue">{special}</p>
            </div>
            <div>
               <p className="statName">weakness</p>
               <p className="statValue">{weakness}</p>
            </div>
            <div className="oval"></div>
         </div>
         <img src="./src/assets/img/chooseBtn.png" className="chooseBtn" onClick={formBtn} />
      </>
   );
};
