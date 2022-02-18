import React from "react";
import styles from "../styles/Button.module.css";

const Button = () => {
  return (
    <button type="button" onClick={() => alert("hi")} className={styles.button}>
      Button
    </button>
  );
};

export default Button;
