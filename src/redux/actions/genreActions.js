import * as types from "./actionTypes";
import * as genreApi from "../../api/genreApi";

export const loadGenresSuccess = (genres) => {
  return { type: types.LOAD_GENRES_SUCCESS, genres };
}

export const loadGenres = () => {
  return function(dispatch) {
    return genreApi
      .getGenres()
      .then(genres => {
        dispatch(loadGenresSuccess(genres));
      })
      .catch(error => {
        throw error;
      });
  };
}