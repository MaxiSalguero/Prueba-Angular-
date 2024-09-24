import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICompetitor } from '../models/competitors.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://cpa3hcbqrxttulmjta6r5xlz7q0zsvnw.lambda-url.us-east-2.on.aws/mock-data';

  constructor(private _httpClient: HttpClient ) { }

  public getCompetitors(): Observable<ICompetitor[]> { 
    const headers = new HttpHeaders({
      'x-api-key': 'api_key_mock'
    });

    return this._httpClient.get<any>(this.baseUrl, { headers }).pipe(
      map(response => response.data.competitors)
    );
  }

}
