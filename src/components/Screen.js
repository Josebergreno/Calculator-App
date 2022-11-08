import styles from "./CalcInterface.module.css";

const Screen = (props) => {
  return <div className={styles["screen"]}>{props.screenContent}</div>;
};

export default Screen;
