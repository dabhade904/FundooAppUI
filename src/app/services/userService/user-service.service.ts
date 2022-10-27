import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpService) { }
  register(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.postService('https://localhost:44308/api/User/Register', data, false, header)
  }
}