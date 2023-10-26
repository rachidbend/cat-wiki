import { Link } from 'react-router-dom';
// import styles from './ArticleComponent.module.css';

import img1 from './../../assets/image-1.png';
import img2 from './../../assets/image-2.png';
import img3 from './../../assets/image-3.png';

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

      <div className={styles.imgContainer}>
        <img className={styles.catImg} src={img2} alt="" />
        <img
          className={`${styles.catImg} ${styles.sideImg}`}
          src={img3}
          alt=""
        />
        <img className={styles.oddImg} src={img1} alt="" />
      </div>
    </div>
  );
}
