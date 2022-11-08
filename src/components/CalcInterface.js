import styles from "./CalcInterface.module.css";
import Screen from "./Screen";
import { useState } from "react";
import CalcButtons from "./Buttons/CalcButtons";

const CalcInterface = (props) => {
  const [screenContent, setScreenContent] = useState("");

  const ClickHandler = (e) => {
    const target = e.target.textContent;
    setScreenContent((prevState) => prevState + target);

    //------------------ German -----------------//

    if (
      screenContent > 99999999999999999999 ||
      screenContent < -99999999999999999999
    ) {
      setScreenContent("Was machst du da??");
      props.onGerman();
    }

    if (screenContent === "Was machst du da??") {
      setScreenContent("");
    }

    //----------------- Rick-Roll -----------------//

    if (screenContent === "12345678") {
      setScreenContent("Rick-Rolled");
      props.onRickRoll();
    }
    if (screenContent === "Rick-Rolled") {
      setScreenContent("");
    }

    //---------------- OPERATIONS -----------------//

    //------------------ Multiply -----------------//
    if (target === "=") {
      setScreenContent(screenContent);
    }

    if (target === "=" && screenContent.includes("x")) {
      const multiply = screenContent
        .split("x")
        .reduce((acc, val) => +acc * +val);
      setScreenContent(multiply);
    }

    //------------------ Add -----------------//
    if (target === "=" && screenContent.includes("+")) {
      const add = screenContent.split("+").reduce((acc, val) => +acc + +val);
      setScreenContent(add);
    }

    //------------------ Subtract -----------------//
    if (target === "=" && screenContent.includes("-")) {
      const subtract = screenContent
        .split("-")
        .reduce((acc, val) => +acc - +val);
      setScreenContent(subtract);
    }

    //------------------ Divide -----------------//
    if (target === "=" && screenContent.includes("/")) {
      const divide = screenContent.split("/").reduce((acc, val) => +acc / +val);
      setScreenContent(divide);
    }

    //------------------ Del -----------------//
    if (target === "Del") {
      setScreenContent(screenContent.slice(0, -1));
    }

    //------------------ Clr -----------------//
    if (target === "Clr") {
      setScreenContent("");
    }

    //------------------ +/- -----------------//
    if (target === "+/-") {
      screenContent === ""
        ? setScreenContent("")
        : setScreenContent(-1 * screenContent);
    }
    //------------------ % -----------------//
    if (target === "%") {
      setScreenContent(screenContent / 100 + "x");
    }
  };

  return (
    <div className={styles["container"]}>
      <Screen screenContent={screenContent} />
      <CalcButtons onClick={ClickHandler} />
    </div>
  );
};

export default CalcInterface;
