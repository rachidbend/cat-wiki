/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MostSearchedHomeElement.module.css';

<<<<<<< HEAD
export default function MostSearchedHomeElement({ breed }) {
=======
export default function MostSearchedHomeElement({ breed, index }) {
  // using the state to cause a rerendre when this element gets the image URL
>>>>>>> d895f5c763e046b1f748290fff9f921aa855b94e
  const [imgUrl, setImgUrl] = useState('');
  useEffect(
    function () {
      async function getImgUrl() {
        const img = await getImageLink(breed.imageId);
        setImgUrl(img);
      }
      getImgUrl();
    },
    [breed.imageId, imgUrl]
  );

  if (imgUrl === '') return <p>Loading...</p>;

  return (
    <Link
      to={`/breed/${breed.id}`}
      className={styles.link}
      key={`mostSearched_${breed.id}`}
    >
      <div>
        <img
          className={`${styles.image} ${
            index === 0 ? styles.firstLinkImg : ''
          }`}
          src={imgUrl}
          alt=""
        />
        <p className={styles.name}>{breed.name}</p>
      </div>
    </Link>
  );
}

export async function getImageLink(imageId) {
  // get the referance image of the breed
  const refrenceImageRes = await fetch(
    `https://api.thecatapi.com/v1/images/${imageId}`
  );
  const refrenceImageData = await refrenceImageRes.json();

  return refrenceImageData.url;
}
