import React from 'react'
import styles from './alert.module.css'

const Alert = ({ display, message, type, onClose }) => {
  return (
    display && (
      <div className={styles.overlay}>
        <div className={`${styles.popup} ${styles[type]}`}>
          <button className={styles.close} onClick={onClose}>
            &times;
          </button>
          <div className={styles.content}>{message}</div>
        </div>
      </div>
    )
  );
};

export default Alert;
