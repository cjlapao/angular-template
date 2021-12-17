import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse, User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../../shared/services/helper.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl: string;
  private userSubject: BehaviorSubject<User | null>;
  private user: Observable<User | null>;

  constructor(
    private router: Router,
    private http: HttpClient,
    helperSvc: HelperService
  ) {
    this.baseUrl = helperSvc.getBaseUrl();
    const localUsr = localStorage.getItem('user') ?? '';
    let user: User | null;
    if (localUsr) {
      user = JSON.parse(localUsr);
    } else {
      user = null;
    }
    this.userSubject = new BehaviorSubject<User | null>(user);
    this.user = this.userSubject.asObservable();
  }

  public get currentUser(): User | null {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    let loginRequest = {
      username,
      password,
    };
    return this.http
      .post<LoginResponse>(`${this.baseUrl}/login`, loginRequest)
      .pipe(
        map((response) => {
          const user: User = {
            id: '',
            firstName: '',
            lastName: '',
            email: username,
            password: password,
            name: username,
            token: response.access_token,
            username: username,
          };

          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
  }
}
