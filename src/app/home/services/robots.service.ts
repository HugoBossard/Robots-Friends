import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from '../../../environments/environment.developement';
import { Robot } from '../../core/models/robot';

@Injectable({
  providedIn: 'root'
})
export class RobotsService {
  private collection$ = new BehaviorSubject<Robot[]>([]);

  constructor(private http: HttpClient) { 
    this.refrechCollection();
  }

  private refrechCollection() {
    this.http.get<Robot[]>(`${environment.apiUrl}/api/users?apiKey=${environment.apiKey}`)
    .pipe(
      map((robots) => 
        robots.map((robot) => 
          new Robot({...robot})
        )
      )
    )
    .subscribe((data) => 
      this.collection.next(data)
    );
  }

  public get collection() {
    return this.collection$;
  }

  public getRobotById(robotId: String): Observable<Robot> {
    return this.http.get<Robot>(`${environment.apiUrl}/api/users/${robotId}?apiKey=${environment.apiKey}`);
  }

  public toggleInFavorite(robotId: String) {
    this.http.patch(`${environment.apiUrl}/api/users/toggle-favorite/${robotId}?apiKey=${environment.apiKey}`, null)
    .pipe(
      tap(() => {
        this.refrechCollection()
      })
    )
    .subscribe();
  }

  public getRobotsInFavorite() {
    return this.http.get<Robot[]>(`${environment.apiUrl}/api/users/favorites?apiKey=${environment.apiKey}`);
  }
}