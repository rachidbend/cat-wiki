import styles from './MostSearchedElement.module.css';
import { useEffect, useState } from 'react';
import { getImageLink } from './MostSearchedHomeElement';
import { Link } from 'react-router-dom';

export default function MostSearchedElement({ breed, index }) {
  const [imgUrl, setImgUrl] = useState('');
  useEffect(
    function () {
      async function getImgUrl() {
        if (imgUrl !== '') return;
        const img = await getImageLink(breed.imageId);
        setImgUrl(img);
      }
      getImgUrl();
    },
    [breed.imageId, imgUrl]
  );

  if (imgUrl === '') return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/breed/${breed.id}`}>
        <h3 className={styles.title}>
          {index + 1}. {breed.name}
        </h3>
      </Link>

      <img className={styles.img} src={imgUrl} alt="" />

      <p className={styles.description}>{breed.description}</p>
    </div>
  );
}
