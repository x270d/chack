import { combineReducers } from "redux";
import { categories } from "./categoriesReducer";
import { joke } from "./jokeReducer";
import { likeJoke } from "./likeJokeReducer";

export const rootReducer = combineReducers({
  categories,
  joke,
  likeJoke,
});

export type RootState = ReturnType<typeof rootReducer>;
