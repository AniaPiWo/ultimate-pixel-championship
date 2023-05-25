import React from 'react';
import ReactDOM from 'react-dom';
import { WelcomeScreen } from './components/WelcomeScreen';
import './App.css';

function App() {
   const buttonCheck = () => {
      console.log('Choose button clicked!');
   };

   return (
      <>
         <WelcomeScreen chooseBtn={buttonCheck} />
      </>
   );
}

export default App;
