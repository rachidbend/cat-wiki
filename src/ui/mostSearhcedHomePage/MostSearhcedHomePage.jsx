import { useSelector } from 'react-redux';
import styles from './MostSearhcedHomePage.module.css';
import MostSearchedHomeElement from './MostSearchedHomeElement';
export default function MostSearhcedHomePage() {
  const mostSearchedBreeds = useSelector(
    state => state.mostSearched.mostSearchedBreeds
  );
  if (!mostSearchedBreeds) return;
  const fourMostSearchedBreeds = mostSearchedBreeds.slice(0, 4);
  console.log(fourMostSearchedBreeds);
  return (
    <div className={styles.mostSearchedContianer}>
      <h3 className={styles.mostSearchedHomeHeader}>Most Searched Breeds</h3>

      <h2 className={styles.mostSearchedHomeHeading}>
        66+ Breeds For you <br /> to discover
      </h2>
      <div className={styles.mostSearchedHomeContianer}>
        {fourMostSearchedBreeds.map(breed => {
          return <MostSearchedHomeElement breed={breed} key={breed.id} />;
        })}
      </div>
    </div>
  );
}
