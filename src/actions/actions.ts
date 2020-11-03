import {
  ChackActionType,
  ERROR_CATEGORIES_FETCH,
  START_CATEGORIES_FETCH,
  STOP_CATEGORIES_FETCH,
  START_JOKE_FETCH,
  STOP_JOKE_FETCH,
  ERROR_JOKE_FETCH,
  JockActionType,
  ADD_JOKE,
  DELETE_JOKE,
  DELETE_ALL_JOKE,
  Joke,
} from "./types";
import { Dispatch } from "redux";
import api from "../api";

export const getCategories = () => async (
  dispatch: Dispatch<ChackActionType>
) => {
  const fetchCategory = async () => {
    try {
      dispatch({
        type: START_CATEGORIES_FETCH,
      });
      const response = await api.get<string[]>("/jokes/categories");
      dispatch({
        type: STOP_CATEGORIES_FETCH,
        payload: response.data,
      });
    } catch (e) {
      fetchCategory();
      dispatch({
        type: ERROR_CATEGORIES_FETCH,
      });
      console.log(e);
    }
  };
  fetchCategory();
};

export const getJokeCategories = (value: string) => async (
  dispatch: Dispatch<JockActionType>
) => {
  const jokeFetch = async () => {
    try {
      dispatch({
        type: START_JOKE_FETCH,
      });
      const response = await api.get<Joke>(`/jokes/random?category=${value}`);
      dispatch({
        type: STOP_JOKE_FETCH,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ERROR_JOKE_FETCH,
      });
      console.log(e);
    }
  };
  jokeFetch();
};

export const addNewJoke = (val: string) => ({
  type: ADD_JOKE,
  payload: val,
});

export const deleteJoke = (val: string) => ({
  type: DELETE_JOKE,
  payload: val,
});

export const deleteAllJoke = () => ({
  type: DELETE_ALL_JOKE,
});
