import React from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Carts/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <React.Fragment>
      <button className={styles.button}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className={styles.badge}>3</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
