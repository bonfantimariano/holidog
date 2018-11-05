import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

    constructor(private http: HttpClient) { }

    endpoint = 'https://dog.ceo/api/';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };


    private extractData(res: Response) {
      let body = res;
      return body || { };
    }

    getAllBreeds(): Observable<any> {
        return this.http.get(this.endpoint + 'breeds/list/all').pipe(
        map(this.extractData));
    }
    getRandomImage(): Observable<any> {
        return this.http.get(this.endpoint + 'breeds/image/random').pipe(
        map(this.extractData));
    }
    getByBreed(breed: string): Observable<any> {
        return this.http.get(this.endpoint + 'breed/' + breed + '/images').pipe(
        map(this.extractData));
    }
    getBySubBreed(): Observable<any> {
        return this.http.get(this.endpoint + 'breed/hound/list').pipe(
        map(this.extractData));
    }

    getByBreedRandom(breed: string): Observable<any> {
        return this.http.get(this.endpoint + 'breed/' + breed + '/images/random').pipe(
        map(this.extractData));
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
