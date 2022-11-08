import styles from "../CalcInterface.module.css";

const ButtonRow3 = (props) => {
  return (
    <div className={styles["row--3"]}>
      <button onClick={props.onClick} className={styles["button"]}>
        4
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        5
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        6
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        -
      </button>
    </div>
  );
};

export default ButtonRow3;
