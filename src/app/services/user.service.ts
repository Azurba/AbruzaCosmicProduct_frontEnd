import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {
    
  }

  public getUserByEmail(email : string){
    return this.http.get<User>(`https://localhost:7170/api/User/users?email=${email}`)
  }

  public login(email: string, password: string): Observable<string> {
    const request = { email, password };
    return this.http.post(`https://localhost:7170/api/User/login`, request, { responseType: 'text' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }
}

//return this.http.post<string>(`https://localhost:7170/api/User/login`, request);