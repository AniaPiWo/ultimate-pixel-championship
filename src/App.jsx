import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen.jsx';
import { Fighter } from './components/Fighter.jsx';
import './App.css';

function App() {
   const [isChosen, setChosenState] = useState(false);
   const [screenTitle, setScreenTitle] = useState('Choose your fighter');
   const [stepImg, setStepImg] = useState('Step1.png');

   const openWizard = () => {
      setChosenState(true);
   };

   const buttonTest = () => {
      console.log('clicked!');
   };

   return (
      <div className="screen">
         {!isChosen ? (
            <WelcomeScreen startBtn={openWizard} />
         ) : (
            <>
               <h2 className="screenTitle">{screenTitle}</h2>
               <img className="stepImg" src={`./src/assets/img/${stepImg}`} alt="stepper" />
               <Fighter />
            </>
         )}
      </div>
   );
}

export default App;
