import React, { useState } from 'react';

export const Fighter = (props) => {
   const [name, setName] = useState(props.name);
   const [health, setHealth] = useState(props.health);
   const [attack, setAttack] = useState(props.attack);
   const [special, setSpecial] = useState(props.special);
   const [weakness, setWeakness] = useState(props.weakness);

   return (
      <>
         <div className="fighterBox">
            <img src="./src/assets/img/Karen.png" alt="fighter" className="fighterImg" />
            <p className="fighterName">Annoyed Karen</p>
            <div className="statBox">
               <div>
                  <p className="statName">health</p>
                  <p className="statValue">67</p>
               </div>
               <div>
                  <p className="statName">attack</p>
                  <p className="statValue">14 - 18</p>
               </div>
            </div>
            <div>
               <p className="statName">special attack</p>
               <p className="statValue">Passive Aggressiveness</p>
            </div>
            <div>
               <p className="statName">weakness</p>
               <p className="statValue">Logical thinking</p>
            </div>
            <div className="oval"></div>
         </div>
         <img src="./src/assets/img/chooseBtn.png" className="chooseBtn" />
      </>
   );
};
