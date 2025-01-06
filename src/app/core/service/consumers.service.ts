import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsumersService {

  private baseURL = environment.basicURL

  constructor(
    private http: HttpClient
  ) { }

  getConsumers() {
    return this.http.get<any>(`${this.baseURL}customer`)
  }
}
