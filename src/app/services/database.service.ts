import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { map, subscribeOn } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private url:string = 'http://localhost:8081/mtgdb';

  httpOptions = {
    HttpHeaders: new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private http: HttpClient) { }

  getAllCards(): Observable<any> {
    return this.http.get<any>(this.url + '/cards');
  }

  getCard(): Observable<any> {
    return this.http.get<any>(this.url + '/card/' + '1');
  }
}
