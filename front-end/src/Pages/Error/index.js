import React from "react";
import styles from "./error.module.css";

// TODO: Remove navbar and footer from error page, remove resorces from navigation
const Error = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.error}>Error : No such page exists on eaxee.com</h1>
    </div>
  );
};

export default Error;
