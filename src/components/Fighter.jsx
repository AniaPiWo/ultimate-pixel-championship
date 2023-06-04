import PropTypes from 'prop-types';
import chooseBtnImg from '../assets/chooseBtn.png';

export const Fighter = ({ name, health, attack, special, weakness, formBtn, imageSrc }) => {
   const imagePath = new URL(`../assets/${imageSrc}`, import.meta.url).href;

   return (
      <>
         <div className="fighterBox">
            <img src={imagePath} alt="fighter" className="fighterImg" />
            <p className="fighterName">{name}</p>
            <div className="statBox">
               <div>
                  <p className="statName">health</p>
                  <p className="statValue">{health}</p>
               </div>
               <div>
                  <p className="statName">attack</p>
                  <p className="statValue">{attack}</p>
               </div>
            </div>
            <div>
               <p className="statName">special attack</p>
               <p className="statValue">{special}</p>
            </div>
            <div>
               <p className="statName">weakness</p>
               <p className="statValue">{weakness}</p>
            </div>
            <div className="oval"></div>
         </div>
         <button>
            <img src={chooseBtnImg} className="chooseBtn" onClick={formBtn} />
         </button>
      </>
   );
};

Fighter.propTypes = {
   name: PropTypes.string.isRequired,
   health: PropTypes.number.isRequired,
   attack: PropTypes.number.isRequired,
   special: PropTypes.string.isRequired,
   weakness: PropTypes.string.isRequired,
   formBtn: PropTypes.func.isRequired,
   imageSrc: PropTypes.string.isRequired,
};
