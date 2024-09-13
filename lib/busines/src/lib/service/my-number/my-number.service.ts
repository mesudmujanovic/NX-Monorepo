import { MyNumberI } from '../../../../../domains/src/lib/my-number/interface/my-number-inteface';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyNumberService {

  constructor( private http: HttpClient,
               @Inject('environment') private environment: Record<string, string | boolean | number>) {
  }

  public getAllNumber(): Observable<MyNumberI[]> {
    return this.http.get<MyNumberI[]>(`${this.environment['MY_NUMBER_ENDPOINT']}/my-numbers`).pipe(
      catchError(err => {
        console.error('Error problwm:', err);
        return throwError(err);
      })
    )
  }
}
