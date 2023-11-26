import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private url = 'https://api.worldbank.org/V2/country/id?format=json'
  apiUrl: any;
  constructor(private http: HttpClient) {}

  getCountryInfo(name: string): Observable<any> {
    const url = `${this.apiUrl}${name}`;
    return this.http.get(url);
  }
}
