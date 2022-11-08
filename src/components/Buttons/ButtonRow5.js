import styles from "../CalcInterface.module.css";

const ButtonRow5 = (props) => {
  return (
    <div className={styles["row--5"]}>
      <button onClick={props.onClick} className={styles["button"]}>
        Clr
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        %
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        /
      </button>
      <button onClick={props.onClick} className={styles["button"]}>
        Del
      </button>
    </div>
  );
};

export default ButtonRow5;
