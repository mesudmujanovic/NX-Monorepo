import { createReducer, on } from "@ngrx/store";
import { categoryActionFailure, getCategoriesActions } from "./category.acion";

export interface CategoryState {
  categories: string[];
  currentCategory: string;
  error: string;
}

const initalState: CategoryState = {
categories: [],
currentCategory: '',
error: ''
}

export const categoryReducer = createReducer(
  initalState,
  on(getCategoriesActions, (state, action) => {
    return {
      ...state,
      categories: state.categories,
      error: ''
    }
  }),
  on(categoryActionFailure, (state, action) => {
    return {
      ...state,
      categories: [],
      error: action.error
    }
  })
)
