import { combineReducers } from "redux";
import { FECTHED_GIFS, SEARCHED_GIFS, LOADING } from "./actionType";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING:
      return true;
    default:
      return state;
  }
};

const fechedGifsReducer = (state = [], action) => {
  switch (action.type) {
    case FECTHED_GIFS:
      return action.payload;
    default:
      return state;
  }
};

const searchedGifsReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCHED_GIFS:
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  fechedGifs: fechedGifsReducer,
  searchedGifs: searchedGifsReducer,
  loading: loadingReducer,
});
