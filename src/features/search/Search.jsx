import { Form, redirect } from 'react-router-dom';
import styles from './Search.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import store from '../../store';
import iconSearch from '../../assets/icon-search.svg';

// used in filtering the option based on the query
function checkIfTrue(value) {
  if (value === true) return true;
  if (value === false) return false;
}

function filterOptions(query, allBreeds) {
  const filteredBreeds = allBreeds.filter(breed => {
    // split the name of the breed to an array of its letters
    const splitedBreedName = breed?.name.toLowerCase().split('');
    //  split the query of the breed to an array of its letters
    const splitedQuery = query.toLocaleLowerCase().split('');
    // check if the breed name includes a letter of the query
    const letterIsIncluded = splitedQuery.map(letter => {
      if (splitedBreedName.includes(letter)) return true;
      else return false;
    });
    // if a breed name includes ALL the letters in the query, return its details
    // chechIfTrue is needed for .every() to work, because it takes a callback function and not an array
    if (letterIsIncluded.every(checkIfTrue)) return breed;
  });
  return filteredBreeds;
}

export default function Search() {
  // This state is used to keep track of the query
  const [query, setQuery] = useState('');
  // and if the search overlay should be shown or not
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Get the list of all available breeds
  const allBreeds = useSelector(state => state.search.searchOptions);

  // Filter the breed to get the breeds that have the letters in the search query in their names.
  const filteredOptions = filterOptions(query, allBreeds);

  //query state's on change function
  function handleSearchChange(e) {
    setQuery(e.target.value);
  }

  // when an option is clicked,
  function onOptionClick(name) {
    // the query becomes name of the option
    setQuery(name);

    // maybe it should also redirect to the selected breed page
    // in this case, it will take in the id directly, and redirect to the breed page
    // like so: navigate(`/breed/${id}`)
  }

  // it opens the search overlay in mobile view
  function handleOpenSearch() {
    if (isSearchOpen === true) setIsSearchOpen(false);
    if (isSearchOpen === false) setIsSearchOpen(true);
  }

  return (
    <div className={`${styles.search}`}>
      <h2 className={styles.logoHeading}>catwiki</h2>
      <p className={styles.description}>
        Get to know more about <br /> your cat breed
      </p>
      <Form autoComplete="off" method="POST" className={styles.form}>
        <img src={iconSearch} className={styles.iconSearch} alt="Search icon" />
        <input
          onChange={handleSearchChange}
          onClick={handleOpenSearch}
          value={query}
          type="text"
          name="breed"
          placeholder="Search"
          className={styles.searchInput}
        ></input>
        {query !== '' ? (
          <div className={styles.searchOptionsContainer}>
            <ul>
              {filteredOptions.map(breed => (
                <li
                  onClick={() => onOptionClick(breed.name)}
                  key={breed.id}
                  value={breed.id}
                >
                  {breed.name}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Form>
      {/* Instead of changing the styling of the search component when it is open, this FORM is used instead with some modifications to it */}
      {query !== '' || isSearchOpen === true ? (
        <Form autoComplete="off" method="POST" className={styles.formMobile}>
          <div className={styles.containeMobiler}>
            <div className={styles.iconCloseContainer}>
              <span className={styles.iconClose} onClick={handleOpenSearch}>
                X
              </span>
            </div>
            <div className={styles.inputContainerMobile}>
              <button className={styles.submitButton} type="submit">
                <img
                  src={iconSearch}
                  className={styles.iconSearchMobile}
                  alt="Search icon"
                />
              </button>
              <input
                onChange={handleSearchChange}
                value={query}
                type="text"
                name="breed"
                placeholder="Search"
                className={styles.searchInputMobile}
              ></input>
            </div>
          </div>
          <div className={styles.searchOptionsContainerMobile}>
            <ul>
              {filteredOptions.map(breed => (
                <li
                  onClick={() => onOptionClick(breed.name)}
                  key={breed.id}
                  value={breed.id}
                >
                  {breed.name}
                </li>
              ))}
            </ul>
          </div>
        </Form>
      ) : null}
    </div>
  );
}

export async function action({ request }) {
  // get the selected breed from the form
  const formData = await request.formData();
  // Object.fromEntries is needed to get the data as an object
  const data = Object.fromEntries(formData);

  // get all breed option to find the one selected by the user
  const allBreeds = store.getState().search.searchOptions;

  // find the breed ID using the breed name inputed by the user
  const filtered = allBreeds.filter(breed => {
    // using toLowerCase() to make sure the comparison works
    if (breed.name.toLowerCase() === data.breed.toLowerCase()) return breed;
  });
  if (filtered.length === 0) return;

  // redirect to the breed details page with the breed selected
  return redirect(`/breed/${filtered.at(0).id}`);
}
