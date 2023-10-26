/* eslint-disable react/prop-types */
import styles from './Score.module.css';

export default function Score({ score }) {
  return (
    <div className={styles.scoreContainer}>
      <span
        className={`${styles.score} ${score >= 1 ? styles.scoreActive : ''}`}
      ></span>

      <span
        className={`${styles.score} ${score >= 2 ? styles.scoreActive : ''}`}
      ></span>
      <span
        className={`${styles.score} ${score >= 3 ? styles.scoreActive : ''}`}
      ></span>
      <span
        className={`${styles.score} ${score >= 4 ? styles.scoreActive : ''}`}
      ></span>
      <span
        className={`${styles.score} ${score >= 5 ? styles.scoreActive : ''}`}
      ></span>
    </div>
  );
}
