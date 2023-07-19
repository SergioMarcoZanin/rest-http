import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GorestService {

  constructor(private http: HttpClient) { }

  insertUsers(url:string, body:{}){
    return this.http.post(url, body)
  }

}
