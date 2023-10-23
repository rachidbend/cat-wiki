/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MostSearchedHomeElement.module.css';
import { getImageLink } from '../../helpers';

export default function MostSearchedHomeElement({ breed }) {
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

  // display the breed element
  return (
    <Link
      to={`/breed/${breed.id}`}
      className={styles.topSearchedHomeLink}
      key={`mostSearched_${breed.id}`}
    >
      <div>
        <img className={styles.topSearchedHomeImage} src={imgUrl} alt="" />
        <p className={styles.topSearchedHomeName}>{breed.name}</p>
      </div>
    </Link>
  );
}
