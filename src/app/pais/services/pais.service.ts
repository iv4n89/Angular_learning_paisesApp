import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.eu/rest/v2';

  get httpParams(): HttpParams {
    return new HttpParams()
    .set('fields', 'name;flag;alpha2Code;population;capital');
  }

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]>{

    const url = `${this.apiURL}/name/${termino}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${termino}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.apiURL}/alpha/${id}`;

    return this.http.get<Country>( url );
  }

  buscarRegion( region: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${region}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
