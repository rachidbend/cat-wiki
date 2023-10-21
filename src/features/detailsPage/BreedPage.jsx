import { useSelector } from 'react-redux';
import store from './../../store';
import {
  breedDetailsLoaded,
  breedImageLoaded,
  otherImagesLoaded,
} from './detailsSlice';
import styles from './BreedPage.module.css';
export default function BreedPage() {
  const { breedDetails, breedImage, otherBreedImages } = useSelector(
    state => state.breed
  );
  console.log(otherBreedImages);

  if (!breedDetails && !breedImage) return <p>loading...</p>;

  return (
    <div>
      <div>
        <img className={styles.breedImage} src={breedImage.url} alt="" />
      </div>
      <div>
        <h2>{breedDetails.name}</h2>
        <p>{breedDetails.description}</p>
        <p>Temperament: {breedDetails.temperemant}</p>
        <p>origin: {breedDetails.origin}</p>
        <p>life span: {breedDetails.life_span} years</p>
      </div>
      <h2>other images</h2>
      <div className={styles.otherImageContainer}>
        {otherBreedImages.map(image => (
          <img
            key={image.id}
            className={styles.otherImage}
            src={image.url}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  // gt the id of the selected breed
  const id = params.id;
  // get the an image of the breed
  const breedImageRes = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`
  );
  const breedImageData = await breedImageRes.json();
  if (!breedImageData) return;

  // use the image ID to get the details of the selected breed
  // get the ID
  const imageId = breedImageData.at(0).id;
  // get the details
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
  // https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=abys
  const otherImagesRes = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${id}`
  );
  const otherImagesData = await otherImagesRes.json();

  // add the referance image to the store
  store.dispatch(breedImageLoaded(refrenceImageData));
  // add the breed details to the store
  store.dispatch(breedDetailsLoaded(breedDetails));
  // add the other images to the store
  store.dispatch(otherImagesLoaded(otherImagesData));
  return null;
}
