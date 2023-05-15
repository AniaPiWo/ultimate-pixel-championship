import { welcomeScreen } from './js/screens/welcome-screen.js';
import { wizardScreen } from './js/screens/wizard-screen.js';

document.addEventListener('DOMContentLoaded', () => {
   const app = document.querySelector('#app');

   //margin decoration
   const topMarginDecoration = document.createElement('img');
   topMarginDecoration.classList.add('top-margin');
   topMarginDecoration.src = 'img/topMargin.png';

   const btmMarginDecoration = document.createElement('img');
   btmMarginDecoration.classList.add('btm-margin');
   btmMarginDecoration.src = 'img/btmMargin.png';

   const displayWelcomeScreen = welcomeScreen();
   const displayWizardScreen = wizardScreen();

   // Display margins decoration
   app.append(topMarginDecoration);
   app.append(btmMarginDecoration);

   // Display welcome screen
   app.append(displayWelcomeScreen);

   // Display wizard screen after clicking a button
   const chooseBtn = document.querySelector('.choose-btn');
   chooseBtn.addEventListener('click', () => {
      app.removeChild(displayWelcomeScreen);
      app.append(displayWizardScreen);
   });
});
