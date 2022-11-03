import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private httpClient: HttpClient) { }
  postService(url: string, data: any, token: boolean = false, options: any) {
    return this.httpClient.post(url, data, token && options)
  }

  putService(url: string, data: any, token: boolean = false, options: any) {
    return this.httpClient.put(url, data, token && options)
  }

  getService(url: string, token: boolean = false, options: any) {
    return this.httpClient.get(url, token && options)
  }
}