import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import './App.css';

function App() {
   const [isChosen, setChosenState] = useState(false);

   const openWizard = () => {
      setChosenState(true);
   };

   return <div>{!isChosen ? <WelcomeScreen chooseBtn={openWizard} /> : <p>Wizard screen</p>}</div>;
}

export default App;
