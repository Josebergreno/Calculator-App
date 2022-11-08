import styles from "./App.module.css";
import BackgroundPicNav from "./UI/BackgroundPicNav";
import { useState } from "react";
import CalcInterface from "./components/CalcInterface";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [isGerman, setIsGerman] = useState(false);
  const [isRickRoll, setIsRickRoll] = useState(false);

  const backgroundPicChange = () => {
    setIsClicked(true);
  };
  const germanHandler = () => {
    setIsGerman(true);
    setIsRickRoll(false);
  };
  const rickRollHandler = () => {
    setIsRickRoll(true);
    setIsGerman(false);
  };

  return (
    <div className={isClicked === true && styles["dog"]}>
      <div className={isRickRoll === true && styles["rick-roll"]}>
        <div className={isGerman === true && styles["german"]}>
          {isClicked === false && (
            <BackgroundPicNav
              dogClicked={backgroundPicChange}
            ></BackgroundPicNav>
          )}
          {isClicked === true && (
            <div>
              <CalcInterface
                onGerman={germanHandler}
                onRickRoll={rickRollHandler}
              ></CalcInterface>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
