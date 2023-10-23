import { Form, redirect, useLoaderData } from 'react-router-dom';
import styles from './Homepage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { searchoptionsLoaded } from '../search/searchSlice';
import store from '../../store';
import { mostSearchedLoaded } from '../mostSearched/mostSearchedSlice';
import MostSearhcedHomePage from '../../ui/mostSearhcedHomePage/MostSearhcedHomePage';
import ArticleComponent from '../article/ArticleComponent';

export default function Homepage() {
  const allBreeds = useLoaderData();
  const dispatch = useDispatch();

  // putting the breeds in the store
  useEffect(
    function () {
      dispatch(searchoptionsLoaded(allBreeds));
    },
    [allBreeds, dispatch]
  );

  return (
    <>
      <div className={`${styles.homepage}`}>
        <Form method="POST">
          <h2>catwiki</h2>
          <p>Get to know more about your cat breed</p>
          <select name="breed" placeholder="Search">
            {
              /* put all the available breeds as option to choose from */
              allBreeds.map(breed => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))
            }
          </select>

          <button type="submit">search</button>
        </Form>
      </div>
      <MostSearhcedHomePage />
      <ArticleComponent />
    </>
  );
}

export async function action({ request }) {
  // get the selected breed from the form
  const formData = await request.formData();
  // Object.fromEntries is needed to get the data as an object
  const data = Object.fromEntries(formData);
  // redirect to the breed details page with the breed selected
  return redirect(`/breed/${data.breed}`);
}

export async function loader() {
  // 1- get the data from the API
  const res = await fetch(`https://api.thecatapi.com/v1/breeds`);
  const data = await res.json();

  // 2- treet the data to only get the names and ids of each breed
  const treetedData = data.map(breed => {
    const treatedBreed = {
      id: breed.id,
      name: breed.name,
      imageId: breed.reference_image_id,
      description: breed.description,
    };

    return treatedBreed;
  });

  // get the first 4 breeds ID, Name, and image
  const list = store.getState().mostSearched.mostSearchedList;
  const top = treetedData.filter(item => list.includes(item.id));

  store.dispatch(mostSearchedLoaded(top));
  return treetedData;
}
