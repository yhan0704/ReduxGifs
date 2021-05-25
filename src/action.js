import { FECTHED_GIFS, SEARCHED_GIFS, LOADING } from "./actionType";

const fetchedGifs = (data) => {
  return {
    type: FECTHED_GIFS,
    payload: data.data,
  };
};

const loading = () => {
  return {
    type: LOADING,
  };
};

export const fetchingGifs = (saerchedText) => (dispatch) => {
  const URL = `https://api.giphy.com/v1/gifs/search?q=${saerchedText}&api_key=hf8BCWJfRr3et5BKOyfjvGTtNLESl9Ko&rating=g&limit=100`;
  dispatch(loading());
  fetch(URL)
    .then((res) => res.json())
    .then((data) => dispatch(fetchedGifs(data)));
};

export const searchedGifs = (search) => {
  return {
    type: SEARCHED_GIFS,
    payload: search,
  };
};
