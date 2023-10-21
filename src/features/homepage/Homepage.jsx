import { Form, redirect, useLoaderData } from 'react-router-dom';
import styles from './Homepage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { searchoptionsLoaded } from '../search/searchSlice';
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
    <div className={`${styles.homepage}`}>
      <Form method="POST">
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
