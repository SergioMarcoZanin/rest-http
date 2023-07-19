import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GorestService {

  constructor(private http: HttpClient) { }

  // insertUsers(url:string, body:{}){
  //   return this.http.post(url, body)
  // }

  post(data: any): Observable<any> {
    return this.http.post<any>(`
    https://gorest.co.in/public/v2/users?access-token=a85dd02584b2e8336b3bfbbab6f798aea6e774b953d5a69077cdca5d3c4fdec3`, data);
  }
  get(): Observable<any> {
    return this.http.get<any>(`
    https://gorest.co.in/public/v2/users?access-token=a85dd02584b2e8336b3bfbbab6f798aea6e774b953d5a69077cdca5d3c4fdec3`);
  }

  getbyid(id:number): Observable<any> {
    return this.http.get<any>('https://gorest.co.in/public/v2/users/' + id +'/?access-token=a85dd02584b2e8336b3bfbbab6f798aea6e774b953d5a69077cdca5d3c4fdec3');
  }

  delete(id:number): Observable<any> {
   return this.http.delete<any>(`https://gorest.co.in/public/v2/users/`+ id +'/?access-token=a85dd02584b2e8336b3bfbbab6f798aea6e774b953d5a69077cdca5d3c4fdec3');
  }
  put(id:number, data:any): Observable<any> {
    return this.http.put<any>(`https://gorest.co.in/public/v2/users/`+ id +'/?access-token=a85dd02584b2e8336b3bfbbab6f798aea6e774b953d5a69077cdca5d3c4fdec3', data);
   }



  }

  
