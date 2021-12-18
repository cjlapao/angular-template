import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AccountService } from '../services/account.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        // Login out if any of the apis respond with a 401 or 403
        // This can be replaced with a retry policy and a refresh of the tokens
        if (err.status === 401 || err.status === 403) {
          this.accountService.logout();
        }

        const error = err.error.message || err.statusText;
        return throwError(err);
      })
    );
  }
}
