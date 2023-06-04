import '/src/App.css';
import PropTypes from 'prop-types';
import chooseBtnImg from '../assets/chooseBtn.png';
import swordsImg from '../assets/Swords.png';

export const WelcomeScreen = ({ startBtn }) => {
   return (
      <>
         <div className="welcomeBox">
            <h1 className="welcomeTitleTop">
               Ultimate Pix <span className="welcomeTitleBottom">Championships</span>
            </h1>
            <img src={swordsImg} alt="crossed swords" />
            <p className="welcomeText">
               Fill out the form to sign up
               <br />
               for upcoming tournee.
            </p>
            <button className="startBtn" onClick={startBtn}>
               <img src={chooseBtnImg} alt="start button" />
            </button>
         </div>
      </>
   );
};

WelcomeScreen.propTypes = {
   startBtn: PropTypes.func.isRequired,
};
