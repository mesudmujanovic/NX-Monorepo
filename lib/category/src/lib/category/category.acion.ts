import {createAction} from '@ngrx/store'

export const getCategoriesActions = createAction('[Category] Get category');

export const categoryActionSucces = createAction(
  '[Category] Get Categories Succes',
  (categories: string[]) => ({ categories })
)

export const categoryActionFailure = createAction(
  '[Category] Get Categories Succes',
  (error: string) => ({ error })
)
