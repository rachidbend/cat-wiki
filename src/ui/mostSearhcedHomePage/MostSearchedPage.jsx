import styles from './MostSearchedPage.module.css';
import { useSelector } from 'react-redux';
import MostSearchedElement from './MostSearchedElement';

export default function MostSearchedPage() {
  const select = useSelector(state => state.mostSearched.mostSearchedBreeds);
  console.log(select);
  return (
    <div>
      <h2 className={styles.heading}>Top 10 most searched breeds</h2>
      <div>
        {select.map((breed, index) => {
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
