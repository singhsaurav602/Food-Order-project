import { Fragment } from "react";
import styles from "./Header.module.css";
import MealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>GenericMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={MealsImage} alt="generic meals" />
      </div>
    </Fragment>
  );
};

export default Header;
