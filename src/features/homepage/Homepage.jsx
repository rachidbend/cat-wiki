import { Form, redirect, useLoaderData } from 'react-router-dom';
import styles from './Homepage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { searchoptionsLoaded } from '../search/searchSlice';
import store from '../../store';
import { mostSearchedLoaded } from '../mostSearched/mostSearchedSlice';
import MostSearhcedHomePage from '../../ui/mostSearhcedHomePage/MostSearhcedHomePage';
import ArticleComponent from '../article/ArticleComponent';
import Search from '../search/Search';

export default function Homepage() {
  // get all of the available breeds data, to show them as options
  const allBreeds = useLoaderData();
  const dispatch = useDispatch();

  // putting the breeds in the store
  useEffect(
    function () {
      dispatch(searchoptionsLoaded(allBreeds));
    },
    [allBreeds, dispatch]
  );

  if (allBreeds?.length === 0 || allBreeds === null) return;

  return (
    <>
      <Search />
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

  // get the first 10 breeds ID, Name, and image
  // get the list of IDs of the most popular breeds
  const list = store.getState().mostSearched.mostSearchedList;
  // filter the breeds infor based on that id
  const top = treetedData.filter(item => list.includes(item.id));

  // Add the treated options to the store
  store.dispatch(searchoptionsLoaded(treetedData));

  // Add most searched breeds to the store
  store.dispatch(mostSearchedLoaded(top));

  return treetedData;
}
