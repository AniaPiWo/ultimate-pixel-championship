import PropTypes from 'prop-types';
import swordsImg from '../assets/Swords.png';
import submitAnotherImg from '../assets/submitAnother.png';

export const Confirmation = ({ restartBtn }) => {
   const commander = localStorage.getItem('name');

   return (
      <div className="confirmationBox">
         <p className="confirmationTitle">
            Thank you for <br />
            signing up,
            <br />
            Commander
            <br />
            {commander}!
         </p>
         <img src={swordsImg} />
         <p className="confirmationText">
            You will be notified about the next steps in the championship process via email.
         </p>
         <button onClick={restartBtn}>
            <img src={submitAnotherImg} alt="back button" />
         </button>
      </div>
   );
};

Confirmation.propTypes = {
   restartBtn: PropTypes.func.isRequired,
};
