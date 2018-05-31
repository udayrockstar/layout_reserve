import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IEmployee {
    userId: number,
    id: number,
    title:string,
    body: string
}
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor( private http: HttpClient) { }
  // getData(): Observable<IEmployee[]> {
  //   return this.http.get<IEmployee[]>('https://jsonplaceholder.typicode.com/posts');
  // }

  getData(): Observable<IEmployee[]> {
      return this.http.get<IEmployee[]>('https://jsonplaceholder.typicode.com/posts');
    }
}
