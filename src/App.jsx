import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen.jsx';
import { Fighter } from './components/Fighter.jsx';
import { Form } from './components/Form.jsx';
import { Confirmation } from './components/Confirmation.jsx';
import { fighters } from '../fighters.js';
import './App.css';

function App() {
   const [isWizard, setWizardState] = useState(false);
   const [isForm, setFormState] = useState(false);
   const [isConfirmation, setConfirmationState] = useState(false);
   const [screenTitle, setScreenTitle] = useState('');
   const [stepImg, setStepImg] = useState('');
   const [currentFighterIndex, setCurrentFighterIndex] = useState(0);

   let fighter = fighters[currentFighterIndex];

   const openWizard = () => {
      setWizardState(true);
      setFormState(false);
      setCurrentFighterIndex(0);
      setStepImg('Step1.png');
      setScreenTitle('Choose your fighter');
   };

   const openForm = () => {
      setWizardState(false);
      setFormState(true);
      setStepImg('Step2.png');
      setScreenTitle('Booking Details');
      localStorage.setItem('fighter', JSON.stringify(fighter));
   };

   const openConfirmation = () => {
      setFormState(false);
      setConfirmationState(true);
      setStepImg('Step3.png');
      setScreenTitle('Confirmation');
   };

   const restartApp = () => {
      setWizardState(true);
      setFormState(false);
      setConfirmationState(false);
   };

   const nextFighter = () => {
      setCurrentFighterIndex((index) => index + 1);
   };

   const prevFighter = () => {
      setCurrentFighterIndex((index) => index - 1);
   };

   return (
      <div className="screen">
         {!isWizard && !isForm && !isConfirmation ? (
            <WelcomeScreen startBtn={openWizard} />
         ) : (
            <>
               <div className="stepper">
                  <h2 className="screenTitle">{screenTitle}</h2>
                  <img className="stepImg" src={`./src/assets/${stepImg}`} alt="stepper" />
               </div>
               {isWizard && (
                  <>
                     <Fighter
                        name={fighter.name}
                        imageSrc={fighter.imgSrc}
                        health={fighter.health}
                        attack={fighter.attack}
                        special={fighter.special}
                        weakness={fighter.weakness}
                        formBtn={openForm}
                     />
                     {currentFighterIndex !== 0 && (
                        <img
                           src="./src/assets/prevBtn.png"
                           alt="prev button"
                           className="prevBtn"
                           onClick={prevFighter}
                        />
                     )}
                     {currentFighterIndex !== fighters.length - 1 && (
                        <img
                           src="./src/assets/nextBtn.png"
                           alt="next button"
                           className="nextBtn"
                           onClick={nextFighter}
                        />
                     )}
                  </>
               )}
               {isForm && (
                  <Form
                     openConfirmation={openConfirmation}
                     backBtn={openWizard}
                     chosenFighter={fighter.name}
                  />
               )}
               {isConfirmation && <Confirmation restartBtn={restartApp} />}
            </>
         )}
      </div>
   );
}

export default App;
