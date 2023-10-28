import { useSelector } from 'react-redux';
import store from './../../store';
import {
  breedDetailsLoaded,
  breedImageLoaded,
  otherImagesLoaded,
} from './detailsSlice';
import styles from './BreedPage.module.css';
import Score from './Score';

// This page is the one responsible for deisplayind a chosen breeds details
// still under construction
export default function BreedPage() {
  // get the details of the breed
  const { breedDetails, breedImage, otherBreedImages } = useSelector(
    state => state.breed
  );

  // check if they exist, and if not, return without rendering anything
  if (
    !Object.keys(breedDetails)?.length === 0 &&
    !Object.keys(breedImage)?.length === 0
  )
    return;

  return (
    <div className={styles.breedPageContainer}>
      <h2 className={styles.breedName}>{breedDetails.name}</h2>
      <div className={styles.imgContainer}>
        <span className={styles.span}></span>
        <img
          className={styles.breedImage}
          src={breedImage.url}
          alt={breedDetails.name}
        />
      </div>

      <div className={styles.details}>
        <p className={styles.description}>{breedDetails.description}</p>
        <div className={styles.statContianer}>
          <p className={`${styles.stat}`}>
            <span>Temperament:</span>
            {breedDetails.temperament}.
          </p>
        </div>
        <div className={styles.statContianer}>
          <p className={`${styles.stat}`}>
            <span>Origin:</span>
            {breedDetails.origin}
          </p>
        </div>
        <div className={styles.statContianer}>
          <p className={`${styles.stat}`}>
            <span>Life span:</span>
            {breedDetails.life_span} years
          </p>
        </div>
        <div className={styles.statContianer}>
          <p className={`${styles.stat}`}>
            <span>Adaptability:</span>
          </p>
          <Score score={breedDetails.adaptability} />
        </div>
        <div className={styles.statContianer}>
          <p className={`${styles.stat}`}>
            <span>Affection level:</span>
          </p>
          <Score score={breedDetails.affection_level} />
        </div>
        <div className={styles.statContianer}>
          <p className={`${styles.stat}`}>
            <span>Child friendly:</span>
          </p>
          <Score score={breedDetails.child_friendly} />
        </div>
        <div className={styles.statContianer}>
          <p className={`${styles.stat}`}>
            <span>Grooming:</span>
          </p>
          <Score score={breedDetails.grooming} />
        </div>
        <div className={styles.statContianer}>
          <p className={`${styles.stat}`}>
            <span>Intelligence:</span>
          </p>
          <Score score={breedDetails.intelligence} />
        </div>
        <div className={styles.statContianer}>
          <p className={`${styles.stat}`}>
            <span> Health issues:</span>
          </p>
          <Score score={breedDetails.health_issues} />
        </div>
        <div className={styles.statContianer}>
          <p className={`${styles.stat}`}>
            <span>Social needs:</span>
          </p>
          <Score score={breedDetails.social_needs} />
        </div>
        <div className={styles.statContianer}>
          <p className={`${styles.stat}`}>
            <span>Stranger friendly:</span>
          </p>
          <Score score={breedDetails.stranger_friendly} />
        </div>
      </div>

      <h2 className={styles.heading}>Other images</h2>
      <div className={styles.otherImageContainer}>
        {otherBreedImages.map(image => (
          <img
            key={image.id}
            className={styles.otherImage}
            src={image.url}
            alt={`another image of ${breedDetails.name} cat breed`}
          />
        ))}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  // get the id of the selected breed
  const id = params.id;
  // get the an image of the breed
  const breedImageRes = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`
  );
  const breedImageData = await breedImageRes.json();
  if (!breedImageData) return;

  //  use the image ID to get the details of the selected breed
  // - get the ID
  const imageId = breedImageData.at(0).id;
  // - get the details
  const detailsRes = await fetch(
    `https://api.thecatapi.com/v1/images/${imageId}`
  );
  const detailsData = await detailsRes.json();
  const breedDetails = detailsData?.breeds.at(0);

  // get the referance image of the breed
  const refrenceImageRes = await fetch(
    `https://api.thecatapi.com/v1/images/${breedDetails.reference_image_id}`
  );
  const refrenceImageData = await refrenceImageRes.json();

  // get the other images
  const otherImagesRes = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${id}`
  );
  const otherImagesData = await otherImagesRes.json();

  // add the referance image to the store
  store.dispatch(breedImageLoaded(refrenceImageData));
  // add the breed details to the store
  store.dispatch(breedDetailsLoaded(breedDetails));
  // add the other images to the store
  // these will be pending promeses at first, and after a short time, fulfilled
  store.dispatch(otherImagesLoaded(otherImagesData));
  return null;
}
