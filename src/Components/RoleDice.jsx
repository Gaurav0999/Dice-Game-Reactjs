import styled from "styled-components";
import PropTypes from "prop-types";

const RoleDice = ({ currentDice, rollDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="rolling  Dice" />
      </div>
      <p>Click On The Dice To Roll</p>
    </DiceContainer>
  );
};
// be ready to choose specific ame what i means that avoid choosing childish names be a professional
export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;

RoleDice.propTypes = {
  currentDice: PropTypes.number.isRequired,
  rollDice: PropTypes.func.isRequired,
};
//   const generateRandomNumber = () => {
//     console.log(Math.floor(Math.random() * 6) + 1);
//     return Math.floor(Math.random() * 6) + 1;
//   };
