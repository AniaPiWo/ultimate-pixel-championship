import '/src/App.css';
import PropTypes from 'prop-types';

export const WelcomeScreen = ({ startBtn }) => {
   return (
      <>
         <div className="welcomeBox">
            <h1 className="welcomeTitleTop">
               Ultimate Pix <span className="welcomeTitleBottom">Championships</span>
            </h1>
            <img src="./src/assets/Swords.png" />
            <p className="welcomeText">
               Fill out the form to sign up
               <br />
               for upcoming tournee.
            </p>
            <button className="startBtn" onClick={startBtn}>
               <img src="./src/assets/chooseBtn.png" alt="start button" />
            </button>
         </div>
      </>
   );
};

WelcomeScreen.propTypes = {
   startBtn: PropTypes.func.isRequired,
};
