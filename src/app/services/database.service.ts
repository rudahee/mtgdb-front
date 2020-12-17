import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { map, subscribeOn } from 'rxjs/operators'
import { Card } from 'src/assets/Card';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  private url:string = 'http://localhost:8081/mtgdb';

  httpOptions = {
    HttpHeaders: new HttpHeaders({ 'Content-Type':'application/json'})
  }

  constructor(private http: HttpClient) { }

  getAllCards(): Observable<any> {
    return this.http.get<any>(this.url + '/cards');
  }

  getCard(id: string): Observable<any> {
    return this.http.get<any>(this.url + '/card/' + id);
  }

  deleteCard(card: Card): Observable<any> {
    return this.http.delete<any>(this.url + '/card/' + card.id.toString());
  }
  deleteCardFromCardInfo(id: string): Observable<any> {
    return this.http.delete<any>(this.url + '/card/' + id);
  }

  postCard(card: Card): Observable<any> {
    return this.http.post(this.url + '/card/', card);
  }

  putCard(card: Card): Observable<any> {
    return this.http.put(this.url + '/card/' + card.id.toString() , card);
  }
}
