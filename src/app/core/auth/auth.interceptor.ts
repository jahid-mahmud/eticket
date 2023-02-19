import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  /**
   * Constructor
   */
  constructor(private _authService: AuthService, private _router: Router) {}

  /**
   * Intercept
   *
   * @param req
   * @param next
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request object
    let newReq = req.clone();
    const token = localStorage.getItem('token') || '';

    // Request
    //
    if (token && token!=="undefined") {
      newReq = req.clone({
        //   withCredentials: true,
        setHeaders: {
          Authorization: `Bearer ${token}`,
          // timeZoneOffset: new Date().getTimezoneOffset().toString(),
          // timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      });
    }

    // Response
    return next.handle(newReq)
    .pipe(
      catchError((error) => {

        // Catch "401 Unauthorized" responses
        if (error instanceof HttpErrorResponse && error.status === 401) {
          
          // Sign out
          if (newReq.url.includes('/api/user/token/refresh')) {
            this._authService.signOutWhileExpire();
            this._router.navigate(['/sign-in']);
          }
          else if(error?.error.code==='user_inactive'){
            this._authService.signOutWhileExpire();
            this._router.navigate(['/sign-in']);
          }
           else {
            return this._authService.refreshToken().pipe(
              catchError((error) => {
                this._authService.signOutWhileExpire();
                this._router.navigate(['/sign-in']);
                return throwError(error);
              }),
              mergeMap(() => next.handle(newReq))
            );
          }

          // Reload the app
          //location.reload();
        }

        return throwError(error);
      })
    );
  }
}
