import styles from './ImageLoader.module.css';
export default function ImageLoader() {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
    </div>
  );
}
