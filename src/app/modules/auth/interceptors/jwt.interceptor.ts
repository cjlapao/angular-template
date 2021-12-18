import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this.accountService.currentUser;
    const isLoggedIn = user && user?.token
    const isApiUri = request.url.startsWith(environment.apiBaseUrl)
    // Adding the authentication token only on the calls that has the api url
    if (isLoggedIn && isApiUri) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user?.token}`
        }
      });
    }

    return next.handle(request);
  }
}
