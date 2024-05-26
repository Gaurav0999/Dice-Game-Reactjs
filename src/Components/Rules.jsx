import styled from "styled-components";

const Rules = () => {
  return (
    <RuleContainer>
      <h2>How to play Dice Game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get the same point as the dice{" "}
        </p>
        <p>if you get the wrong guess then 2 points will be deducted </p>
      </div>
    </RuleContainer>
  );
};

export default Rules;

const RuleContainer = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto; // corrected typo
  margin-top: 40px; // corrected typo
  border-radius: 10px;

  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px; // corrected typo
  }
`;
