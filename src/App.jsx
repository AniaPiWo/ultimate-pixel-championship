import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen.jsx';
import { Fighter } from './components/Fighter.jsx';
import { Form } from './components/Form.jsx';
import { Confirmation } from './components/Confirmation.jsx';
import './App.css';

function App() {
   const [isWizard, setWizardState] = useState(false);
   const [isForm, setFormState] = useState(false);
   const [isConfirmation, setConfirmationState] = useState(false);
   const [screenTitle, setScreenTitle] = useState('');
   const [stepImg, setStepImg] = useState('');

   const openWizard = () => {
      setWizardState(true);
      setStepImg('Step1.png');
      setScreenTitle('Choose your fighter');
      stateTest();
   };

   const openForm = () => {
      console.log('clicked');
      setWizardState(false);
      setFormState(true);
      setStepImg('Step2.png');
      setScreenTitle('Booking Details');
      stateTest();
   };

   const openConfirmation = () => {
      setFormState(false);
      setConfirmationState(true);
      setStepImg('Step3.png');
      setScreenTitle('Confirmation');
      stateTest();
   };

   const stateTest = () => {
      console.log(isWizard);
      console.log(isForm);
      console.log(isConfirmation);
   };

   return (
      <div className="screen">
         {!isWizard && !isForm && !isConfirmation ? (
            <WelcomeScreen startBtn={openWizard} />
         ) : (
            <>
               <h2 className="screenTitle">{screenTitle}</h2>
               <img className="stepImg" src={`./src/assets/img/${stepImg}`} alt="stepper" />
               {isWizard && <Fighter formBtn={openForm} />}
               {isForm && <Form confirmBtn={openConfirmation} />}
               {isConfirmation && <Confirmation />}
            </>
         )}
      </div>
   );
}

export default App;
