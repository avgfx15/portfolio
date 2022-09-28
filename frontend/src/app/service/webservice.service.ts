import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebserviceService {
  readonly root_Url;
  constructor(private httpClient: HttpClient) {
    this.root_Url = 'http://localhost:3000';
  }

  get(uri: string) {
    return this.httpClient.get(`${this.root_Url}/${uri}`);
  }
  post(uri: string, payload: object) {
    return this.httpClient.post(`${this.root_Url}/${uri}`, payload);
  }
  patch(uri: string, payload: object) {
    return this.httpClient.patch(`${this.root_Url}/${uri}`, payload);
  }
  delete(uri: string) {
    return this.httpClient.delete(`${this.root_Url}/${uri}`);
  }
}
