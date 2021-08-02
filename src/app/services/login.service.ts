import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse, User } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public login(user: User): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      environment.serverEndPoint + 'login', user
    );
  }
  
}
