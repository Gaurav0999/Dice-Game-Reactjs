import styled from "styled-components";
import PropTypes from "prop-types";
const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const NumberSelectHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {/* now you have to draw 6 or 7 buttons tell me how you goonaa do it be focused to learn everything that comes in your way  */}
        {/* // key is to be passed to identify or for dom tree or whatever you think . key so react can identify */}
        {/* here if you are returning a jsx use () these not these {}  cause curly brackets make them javascript they are no more jsx */}
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => NumberSelectHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>

      <p>select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) =>
    !props.isSelected
      ? "black"
      : "white"}; // gauri you are making very mistakes like forgetting ; colons etc be carefull
`;

NumberSelector.propTypes = {
  selectedNumber: PropTypes.number.isRequired,
  setSelectedNumber: PropTypes.func.isRequired,
  error: PropTypes.string,
  setError: PropTypes.string,
};
