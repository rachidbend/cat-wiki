import styles from './MostSearchedPage.module.css';
import { useSelector } from 'react-redux';
import MostSearchedElement from './MostSearchedElement';

/* keep in mind, that this component can be accessed witout going through the homepage component, which means that the data would not be availabel in this case. but i added the loader for the homepage, to the loader for the route that renders this element, meaning even if it was accessed directly without rendering the homepage first, the data can still be fetched and accesssed */

export default function MostSearchedPage() {
  // get the most searched breed details
  const mostSearchedBreeds = useSelector(
    state => state.mostSearched.mostSearchedBreeds
  );

  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Top 10 most searched breeds</h2>
      <div>
        {/* then render them one by one using this component */}
        {mostSearchedBreeds.map((breed, index) => {
          return (
            <MostSearchedElement
              breed={breed}
              index={index}
              key={`breedElement${breed.id}`}
            />
          );
        })}
      </div>
    </div>
  );
}
