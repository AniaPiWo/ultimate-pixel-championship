import '/src/App.css';
import PropTypes from 'prop-types';
import chooseBtn from '../assets/chooseBtn.png';

export const WelcomeScreen = ({ startBtn }) => {
   const swordsImg = './src/assets/Swords.png';

   return (
      <>
         <div className="welcomeBox">
            <h1 className="welcomeTitleTop">
               Ultimate Pix <span className="welcomeTitleBottom">Championships</span>
            </h1>
            <img src={import.meta.resolve(swordsImg)} alt="crossed swords" />
            <p className="welcomeText">
               Fill out the form to sign up
               <br />
               for upcoming tournee.
            </p>
            <button className="startBtn" onClick={startBtn}>
               <img src={chooseBtn} alt="start button" />
            </button>
         </div>
      </>
   );
};

WelcomeScreen.propTypes = {
   startBtn: PropTypes.func.isRequired,
};
