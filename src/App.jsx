import HomePage from "./Components/HomePage";
import GamePlay from "./Components/GamePlay";
import { useState } from "react";

function App() {
  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  };
  return (
    <>
      {/* how to implement logic here think first what to do to display the page either GamePlay or HomePage */}
      {isGameStarted ? <GamePlay /> : <HomePage toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
