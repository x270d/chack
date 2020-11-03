import {
  ADD_JOKE,
  DELETE_JOKE,
  DELETE_ALL_JOKE,
  MyJoke,
} from "../actions/types";

export const likeJoke = (state = [], action: MyJoke): string[] => {
  switch (action.type) {
    case ADD_JOKE: {
      if (state.length > 9) {
        const newState = state.splice(1);
        return [...newState, action.payload];
      }
      return [...state, action.payload];
    }
    case DELETE_JOKE: {
      const newState: string[] = state.filter((i) => i !== action.payload);
      return newState;
    }
    case DELETE_ALL_JOKE:
      return [];
    default:
      return state;
  }
};
