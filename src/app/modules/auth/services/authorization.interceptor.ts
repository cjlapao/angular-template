import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImV4cCI6MTYzOTE0MDk2MC45OTYzNDM5LCJpYXQiOjE2MzkxMzczNjEsImlzcyI6Ikl0dGVjaDI0LmNvLnVrIiwic2NvcGUiOiJhdXRoZW50aWNhdGlvbiIsInN1YiI6ImFkbWluQGxvY2FsaG9zdCJ9.xeI4hZOFK1ZIZIoo9_sKD84bQgBZiw66j9mA11JGAAQ"
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let tokenRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return next.handle(tokenRequest);
  }
}
