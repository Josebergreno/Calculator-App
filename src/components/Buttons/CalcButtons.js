import ButtonRow1 from "./ButtonRow1";
import ButtonRow2 from "./ButtonRow2";
import ButtonRow3 from "./ButtonRow3";
import ButtonRow4 from "./ButtonRow4";
import ButtonRow5 from "./ButtonRow5";
import styles from "../CalcInterface.module.css";

const CalcButtons = (props) => {
  return (
    <div className={styles["row-container"]}>
      <ButtonRow5 className={styles["row--5"]} onClick={props.onClick} />
      <ButtonRow4 className={styles["row--4"]} onClick={props.onClick} />
      <ButtonRow3 className={styles["row--3"]} onClick={props.onClick} />
      <ButtonRow2 className={styles["row--2"]} onClick={props.onClick} />
      <ButtonRow1 className={styles["row--1"]} onClick={props.onClick} />
    </div>
  );
};

export default CalcButtons;
