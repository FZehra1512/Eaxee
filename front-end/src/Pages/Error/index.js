import React from "react";
import styles from "./error.module.css";

// TODO: Remove navbar and footer from error page, remove resorces from navigation
const Error = ({text}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.error}>Error : {text}</h1>
    </div>
  );
};

export default Error;
