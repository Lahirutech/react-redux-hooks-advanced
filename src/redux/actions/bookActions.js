import * as types from "../actions/actionTypes";
import * as bookApi from "../../api/bookApi";
import { beginApiCall, apiCallSuccess, apiCallError } from "./statusActions";
const books = [{
  id: 1,
    title: "Don't Close Your Eyes",
    summary: "Twin sisters Robin and Sarah haven’t spoken in years. Robin can’t leave her house. A complete shut-in, she spends her days spying on her neighbors, subtly meddling in their lives. But she can’t keep her demons out forever. Someone from her past has returned, and is desperate to get inside.",
    author: "Holly Seddon",
    language: "English",
    slug: "dont-close-your-eyes",
    genreId: 2,
    url: "https://www.goodreads.com/book/show/32768286-don-t-close-your-eyes"

}];

export const loadBookSuccess = () => {
  return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export const loadBooks=()=>{
  return function(dispatch){
    dispatch(beginApiCall());
    return bookApi.getBooks()
    .then(books=>{
       dispatch(loadBookSuccess(books));
dispatch(apiCallSuccess());    })
    .catch(error=>{
      dispatch(apiCallError(error));
      throw error
    })
  }
}

export const createBookSuccess = (book) => {
  return { type: types.CREATE_BOOK_SUCCESS, book }
}

export const updateBookSuccess = (book) => {
  return { type: types.UPDATE_BOOK_SUCCESS, book };
}

export const saveBook = (book) => {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return bookApi
    
      .saveBook(book)
      .then(savedBook => {
        book.id
          ? dispatch(updateBookSuccess(savedBook))
          : dispatch(createBookSuccess(savedBook));
          dispatch(apiCallSuccess())
      })
      .catch(error => {
         dispatch(apiCallError(error));
        throw error;
      });
  };
}

export const deleteBookOptimistic = (id) => {
  return { type: types.DELETE_BOOK_OPTIMISTIC, id };
}

export const deleteBook = (id) => {
  return function(dispatch) {
    dispatch(deleteBookOptimistic(id));
    return bookApi.deleteBook(id);
  };
}