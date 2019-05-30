import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GlobalTrendsService {

  constructor(private _http:HttpClient) { }

  getGlobalTrending() {
    return this._http.get(`${apiUrl}api/v1/global/`)
  }
}
