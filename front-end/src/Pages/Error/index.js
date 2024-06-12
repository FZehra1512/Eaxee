import React from "react";
import styles from "./error.module.css";

const Error = ({text}) => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.error} heading`}>Error : {text}</h1>
    </div>
  );
};

export default Error;
