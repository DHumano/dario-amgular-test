import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable()
export class SearchService {
  baseUrl = 'https://jsonmock.hackerrank.com/api/stocks?date={input}'; // URL to web api

  constructor(private http: HttpClient) {}

  search(term: string): void {
    console.log(term);
  }

  /** GET heroes from the server */
  //   search(term: string): Observable<Hero[]> {
  //     return this.http
  //       .get<Hero[]>(this.heroesUrl)
  //       .pipe(catchError(this.handleError('getHeroes', [])));
  //   }

  //   /* GET heroes whose name contains search term */
  //   searchHeroes(term: string): Observable<Hero[]> {
  //     term = term.trim();

  //     // Add safe, URL encoded search parameter if there is a search term
  //     const options = term ? { params: new HttpParams().set('name', term) } : {};

  //     return this.http
  //       .get<Hero[]>(this.heroesUrl, options)
  //       .pipe(catchError(this.handleError<Hero[]>('searchHeroes', [])));
  //   }
}
