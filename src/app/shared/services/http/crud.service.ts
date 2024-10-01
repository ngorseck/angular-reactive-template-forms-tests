import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  protected basePath = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  save<T, E>(dataRequest?: T) : Observable<E> {

    return this.http.post<E>(`${this.basePath}/api/v1/save`, dataRequest);
  }


  delete<T, E>(idRequest?: T) : Observable<E> {

    return this.http.delete<E>(`${this.basePath}/api/v1/delete/${idRequest}`);
  }

  update<T, E>(dataRequest?: T) : Observable<E> {

    return this.http.put<E>(`${this.basePath}/api/v1/update`, dataRequest);
  }

  find<T, E>(idRequest?: T) : Observable<E> {

    return this.http.get<E>(`${this.basePath}/api/v1/find/${idRequest}`);
  }

  all<E>() : Observable<E> {
    return this.http.get<E>(`${this.basePath}`);
  }

  allObject<E>() : Observable<E> {
    this.basePath = 'https://api.restful-api.dev/objects';
    return this.http.get<E>(`${this.basePath}`);
  }

  saveObject<T, E>(dataRequest?: T) : Observable<E> {
    this.basePath = 'https://api.restful-api.dev/objects';
    return this.http.post<E>(`${this.basePath}`, dataRequest);
  }
}
