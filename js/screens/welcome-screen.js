export const welcomeScreen = () => {
   const welcomeStepWrapper = document.createElement('div');
   welcomeStepWrapper.classList.add('main-container');

   //header
   const titleTop = document.createElement('h2');
   const titleBottom = document.createElement('h2');
   const textTitleTop = document.createTextNode('Ultimate Pix');
   const appTitleBottom = document.createTextNode('Championships');
   titleTop.appendChild(textTitleTop);
   titleTop.classList.add('top-title');
   titleBottom.appendChild(appTitleBottom);
   titleBottom.classList.add('btm-title');

   //swords icon
   const swordsImg = document.createElement('img');
   swordsImg.classList.add('sword-img');
   swordsImg.src = 'img/Swords.png';
   swordsImg.alt = 'Swords image in pixel art';

   //additional info
   const addInfo = document.createElement('h3');
   addInfo.classList.add('subtitle');
   addInfo.innerText = 'Fill out the form to sign up for upcoming tournament.';

   //button
   const chooseBtn = document.createElement('button');
   chooseBtn.classList.add('choose-btn');
   const ButtonImg = document.createElement('img');
   ButtonImg.src = 'img/chooseBtn.png';
   ButtonImg.alt = 'Choose button to go to the next step';
   chooseBtn.appendChild(ButtonImg);

   //display elements
   welcomeStepWrapper.append(titleTop, titleBottom, swordsImg, addInfo, chooseBtn);

   return welcomeStepWrapper;
};
