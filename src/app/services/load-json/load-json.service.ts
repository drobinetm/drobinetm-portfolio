import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadJsonService {

  constructor(private http: HttpClient) { }

  public loadJSON(file: string): Observable<any> {
    return this.http.get(file);
  }
}
