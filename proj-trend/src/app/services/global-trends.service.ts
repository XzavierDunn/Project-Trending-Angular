import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalTrendsService {

  constructor(private _http:HttpClient) { }

  getGlobalTrending() {
    return this._http.get(`${apiUrl}api/v1/global/`)
  }

  getLocalTrending(loc): Observable<any> {
    return this._http.get(`${apiUrl}api/v1/loc/${loc['content']}`)
  };
}
