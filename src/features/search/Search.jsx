import { Form } from 'react-router-dom';
import styles from './Search.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
export default function Search() {
  const [query, setQuery] = useState('');
  const allBreeds = useSelector(state => state.search.searchOptions);
  const filteredOptions = allBreeds.filter(breed => {
    const name = breed.name.toLowerCase();
    if (name.includes(query)) return breed;
  });
  console.log(filteredOptions);
  function handleSearchChange(e) {
    setQuery(e.target.value);
  }

  // const filteredOptions = allBreeds.filter();
  return (
    <div className={`${styles.search}`}>
      <h2>catwiki</h2>
      <p>Get to know more about your cat breed</p>
      <Form method="POST">
        <input
          onChange={handleSearchChange}
          value={query}
          type="text"
          name="breed"
          placeholder="Search"
        ></input>
        <div className={styles.searchOptionsContainer}>
          <ul>
            {allBreeds.map(breed => (
              <li key={breed.id} value={breed.id}>
                {breed.name}
              </li>
            ))}
          </ul>
        </div>
      </Form>
    </div>
  );
}
