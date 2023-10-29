/* eslint-disable react/prop-types */
import styles from './MostSearchedElement.module.css';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { getImageLink } from '../../helpers';

export default function MostSearchedElement({ breed, index }) {
  // using the state to cause a rerendre when this element gets the image URL
  const [imgUrl, setImgUrl] = useState('');
  // this effect is used to get the image URL of the breed it was given
  useEffect(
    function () {
      async function getImgUrl() {
        // no need to re fetch if there is an image URL
        if (imgUrl !== '') return;
        const img = await getImageLink(breed.imageId);
        setImgUrl(img);
      }
      getImgUrl();
    },
    [breed.imageId, imgUrl]
  );

  // if there is no image URL don't display anything
  if (imgUrl === '') return;
  // else, display the breed element
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/breed/${breed.id}`}>
        <h3 className={styles.title}>
          {index + 1}. {breed.name}
        </h3>
      </Link>
      <div className={styles.imgContainer}>
        {index === 0 ? <span className={styles.span}></span> : ''}

        <img
          className={styles.img}
          src={imgUrl}
          alt={`image of a cat of a breed called ${breed.name}`}
        />
      </div>

      <p className={styles.description}>{breed.description}</p>
    </div>
  );
}
