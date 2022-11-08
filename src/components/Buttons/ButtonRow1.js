import styles from "../CalcInterface.module.css";

const ButtonRow1 = (props) => {
  return (
    <div className={styles["row--1"]}>
      <button onClick={props.onClick} className={styles["button"]}>
        +/-
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        0
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        .
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        =
      </button>
    </div>
  );
};

export default ButtonRow1;
