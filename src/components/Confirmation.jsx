import PropTypes from 'prop-types';

export const Confirmation = ({ restartBtn }) => {
   return (
      <div className="confirmationBox">
         <p className="confirmationTitle">
            Thank you for <br />
            signing up,
            <br />
            Commander
            <br />
            [Commander]!
         </p>
         <img src="/src/assets/Swords.png" />
         <p className="confirmationText">
            You will be notified about the next steps in the championship process via email.
         </p>
         <button onClick={restartBtn}>
            <img src="/src/assets/submitAnother.png" alt="back button" />
         </button>
      </div>
   );
};

Confirmation.propTypes = {
   restartBtn: PropTypes.func.isRequired,
};
