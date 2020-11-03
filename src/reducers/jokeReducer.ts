import {
  JockActionType,
  Joke,
  START_JOKE_FETCH,
  STOP_JOKE_FETCH,
  ERROR_JOKE_FETCH,
} from "../actions/types";

export type JokeState = {
  data?: Joke | null;
  isFetching: boolean;
  error: boolean;
};

const initialState: JokeState = {
  data: null,
  isFetching: false,
  error: false,
};

export const joke = (
  state = initialState,
  action: JockActionType
): JokeState => {
  switch (action.type) {
    case START_JOKE_FETCH:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case STOP_JOKE_FETCH:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: false,
      };
    case ERROR_JOKE_FETCH:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
