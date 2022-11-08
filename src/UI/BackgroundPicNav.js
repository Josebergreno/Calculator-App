import styles from "./BackgroundPicNav.module.css";

const BackgroundPicNav = (props) => {
  const puppyClickHandler = (e) => {
    props.dogClicked();
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["choose"]}>
        <p>
          First things first, choose your atmosphere, then happy calculating!
        </p>
      </div>
      <div className={styles["button-container"]}>
        <button className={styles["button-dog"]} onClick={puppyClickHandler}>
          Puppies
        </button>
        <button className={styles["button-fish"]}>Fish</button>
        <button className={styles["button-cat"]}>Cats</button>
      </div>
    </div>
  );
};

export default BackgroundPicNav;
