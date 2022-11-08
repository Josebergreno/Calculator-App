import styles from "../CalcInterface.module.css";

const ButtonRow4 = (props) => {
  return (
    <div className={styles["row--4"]}>
      <button onClick={props.onClick} className={styles["button"]}>
        7
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        8
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        9
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        x
      </button>
    </div>
  );
};

export default ButtonRow4;
