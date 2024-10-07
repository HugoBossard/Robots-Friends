import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.developement';
import { Robot } from '../../core/models/robot';

@Injectable({
  providedIn: 'root'
})
export class RobotsService {
  private collection$: Observable<Robot[]>;

  constructor(private http: HttpClient) { 
    this.collection$ = this.http.get<Robot[]>(`${environment.apiUrl}/api/users?apiKey=${environment.apiKey}`);
  }

  public get collection() {
    return this.collection$;
  }

  public getRobotById(robotId: Number): Observable<Robot> {
    return this.http.get<Robot>(`${environment.apiUrl}/api/users/${robotId}?apiKey=${environment.apiKey}`);
  }
}