import styles from "../CalcInterface.module.css";

const ButtonRow2 = (props) => {
  return (
    <div className={styles["row--2"]}>
      <button onClick={props.onClick} className={styles["button"]}>
        1
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        2
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        3
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        +
      </button>
    </div>
  );
};

export default ButtonRow2;
