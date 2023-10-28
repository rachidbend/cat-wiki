/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MostSearchedHomeElement.module.css';
import { getImageLink } from '../../helpers';
import ImageLoader from './../loader/ImageLoader';
export default function MostSearchedHomeElement({ breed, index }) {
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
      className={styles.link}
      key={`mostSearched_${breed.id}`}
    >
      <div>
        <div className={styles.imgContainer}>
          {index === 0 ? <span className={styles.firstLinkImgSpan}></span> : ''}

          <img className={`${styles.image}`} src={imgUrl} alt="" />
        </div>
        <p className={styles.name}>{breed.name}</p>
      </div>
    </Link>
  );
}
