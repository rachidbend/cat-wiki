import { useSelector } from 'react-redux';
import styles from './MostSearhcedHomePage.module.css';
import MostSearchedHomeElement from './MostSearchedHomeElement';
import { Link } from 'react-router-dom';

export default function MostSearhcedHomePage() {
  // get the details of the most searched breeds
  const mostSearchedBreeds = useSelector(
    state => state.mostSearched.mostSearchedBreeds
  );
  // make sure they exist before showing anything
  if (mostSearchedBreeds.length === 0) return;

  // grab the first 4 of these breeds
  const fourMostSearchedBreeds = mostSearchedBreeds.slice(0, 4);

  return (
    <div className={styles.mostSearchedContianer}>
      <h3 className={styles.mostSearchedHomeHeader}>Most Searched Breeds</h3>

      <h2 className={styles.mostSearchedHomeHeading}>
        66+ Breeds For you <br /> to discover
      </h2>
      <Link to="/most-searched">Learn more</Link>
      <div className={styles.mostSearchedHomeContianer}>
        {/* then show rendrer a sepritae element for each breed */}
        {fourMostSearchedBreeds.map(breed => {
          return <MostSearchedHomeElement breed={breed} key={breed.id} />;
        })}
      </div>
    </div>
  );
}
