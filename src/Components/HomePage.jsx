import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "../styled/Button";

const HomePage = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dices" />
      </div>
      <div className="content">
        <h1>DICE GAMES</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  place-items: center;
  margin: 0 auto;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
HomePage.propTypes = {
  toggle: PropTypes.func.isRequired,
};
