import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  tokan: any;
  constructor(private httpService: HttpService) {
    this.tokan = localStorage.getItem("tokan")
  }
  addNotes(data: any) {
    console.log(data,this.tokan);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.tokan
      })
    }
    return this.httpService.postService('https://localhost:44308/api/Note/Notes', data, true, header)
  }

  getNotes() {
    console.log(this.tokan);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.tokan
      })
    }
    return this.httpService.getService('https://localhost:44308/api/Note/GetNotes', true, header)
  }
}