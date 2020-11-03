export type Joke = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

export const START_CATEGORIES_FETCH = "START_CATEGORIES_FETCH";
type StartCategoriesFetch = {
  type: typeof START_CATEGORIES_FETCH;
};

export const STOP_CATEGORIES_FETCH = "STOP_CATEGORIES_FETCH";
type StopCategoriesFetch = {
  type: typeof STOP_CATEGORIES_FETCH;
  payload?: string[];
};

export const ERROR_CATEGORIES_FETCH = "ERROR_CATEGORIES_FETCH";
type ErrorCategoriesFetch = {
  type: typeof ERROR_CATEGORIES_FETCH;
};

export const START_JOKE_FETCH = "START_JOKE_FETCH";
type StartJokeFetch = {
  type: typeof START_JOKE_FETCH;
};

export const STOP_JOKE_FETCH = "STOP_JOKE_FETCH";
type StopJokeFetch = {
  type: typeof STOP_JOKE_FETCH;
  payload: Joke;
};

export const ERROR_JOKE_FETCH = "ERROR_JOKE_FETCH";
type ErrorJokeFetch = {
  type: typeof ERROR_JOKE_FETCH;
};

export const ADD_JOKE = "ADD_JOKE";
type AddJoke = {
  type: typeof ADD_JOKE;
  payload: string;
}

export const DELETE_JOKE = "DELETE_JOKE";
type DeleteJoke = {
  type: typeof DELETE_JOKE;
  payload: string;
}

export const DELETE_ALL_JOKE = "DELETE_ALL_JOKE";
type DeleteAllJoke = {
  type: typeof DELETE_ALL_JOKE;
}

export type MyJoke = | AddJoke | DeleteJoke | DeleteAllJoke

export type JockActionType = StartJokeFetch | StopJokeFetch | ErrorJokeFetch;

export type ChackActionType =
  | StartCategoriesFetch
  | StopCategoriesFetch
  | ErrorCategoriesFetch;
