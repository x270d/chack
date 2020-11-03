import {
  ChackActionType,
  START_CATEGORIES_FETCH,
  STOP_CATEGORIES_FETCH,
  ERROR_CATEGORIES_FETCH,
} from "../actions/types";

export type CategoriesState = {
  data?: string[];
  isFetching: boolean;
  error: boolean;
};

const initialState: CategoriesState = {
  data: [],
  isFetching: false,
  error: false,
};

export const categories = (
  state = initialState,
  action: ChackActionType
): CategoriesState => {
  switch (action.type) {
    case START_CATEGORIES_FETCH:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case STOP_CATEGORIES_FETCH:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: false,
      };
    case ERROR_CATEGORIES_FETCH:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
