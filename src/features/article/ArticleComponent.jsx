import { Link } from 'react-router-dom';
import styles from './ArticleComponent.module.css';
export default function ArticleComponent() {
  return (
    <div>
      <span className={styles.span}></span>
      <h2 className={styles.heading}>Why should you have a cat?</h2>
      <p className={styles.description}>
        having a cat around you can actually trigger the release of calming
        chemicals in your body which lowers your stress and anxiety levels.
      </p>
      <Link className={styles.link} to="/article/why-you-should-have-a-cat">
        Read More
      </Link>
    </div>
  );
}
