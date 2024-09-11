import { Injectable } from "@angular/core";
import { CategoryService } from './category.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { getCategoriesActions } from "./category.acion";

@Injectable()
export class CategoryEffects {
  constructor(private readonly categoryService: CategoryService, private actions$: Actions ) {}

 loadCategories$ = createEffect(() => this.actions$.pipe(
  ofType(getCategoriesActions),
  exhaustMap(() => this.categoryService.getCategories()
  .pipe(
    map(movies => ({ type: '[MOVIES API] Movies Loaded Success', payload: movies})),
    catchError(() => EMPTY)
  ))
 ))
}
