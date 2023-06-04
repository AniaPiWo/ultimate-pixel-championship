import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen.jsx';
import { Fighter } from './components/Fighter.jsx';
import { Form } from './components/Form.jsx';
import { Confirmation } from './components/Confirmation.jsx';
import { fighters } from '../fighters.mjs';
import prevBtnImg from './assets/prevBtn.png';
import nextBtnImg from './assets/nextBtn.png';
import stepImg1 from './assets/Step1.png';
import stepImg2 from './assets/Step2.png';
import stepImg3 from './assets/Step3.png';
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
      setStepImg(stepImg1);
      setScreenTitle('Choose your fighter');
   };

   const openForm = () => {
      setWizardState(false);
      setFormState(true);
      setStepImg(stepImg2);
      setScreenTitle('Booking Details');
      localStorage.setItem('fighter', JSON.stringify(fighter));
   };

   const openConfirmation = () => {
      setFormState(false);
      setConfirmationState(true);
      setStepImg(stepImg3);
      setScreenTitle('Confirmation');
   };

   const restartApp = () => {
      openWizard();
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
                  <img className="stepImg" src={stepImg} alt="stepper" />
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
                           src={prevBtnImg}
                           alt="prev button"
                           className="prevBtn"
                           onClick={prevFighter}
                        />
                     )}
                     {currentFighterIndex !== fighters.length - 1 && (
                        <img
                           src={nextBtnImg}
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
