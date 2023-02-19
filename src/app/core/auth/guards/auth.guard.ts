import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { AuthService } from "app/core/auth/auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  /**
   * Constructor
   */
  constructor(private _authService: AuthService, private _router: Router) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Can activate
   *
   * @param route
   * @param state
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const redirectUrl = state.url === "/sign-out" ? "/" : state.url;
    return this._check(redirectUrl, route?.data?.roles);
   
  }

  /**
   * Can activate child
   *
   * @param childRoute
   * @param state
   */
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const redirectUrl = state.url === "/sign-out" ? "/" : state.url;
    return this._check(redirectUrl, childRoute?.data?.roles);
  }

  /**
   * Can load
   *
   * @param route
   * @param segments
   */
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this._check("/");
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Check the authenticated status
   *
   * @param redirectURL
   * @private
   */
  private async _check(redirectURL: string, role?: string[]): Promise<boolean> {
    
    // Check the authentication status
    try {
    const isAutheticated=  await this._authService.check();
      if (role && role.length && !this._authService.hasRole(role)) {
        this._authService.signOut()
        this._router.navigate(["error/403"]);
        this._router.navigate(["sign-in"]);

        return true; // not access to the feature
      }
      // Allow the access
      return true;
;

    } catch (error) {
      // If the user is not authenticated...
      // Redirect to the sign-in page
      this._router.navigate(["sign-in"], { queryParams: { redirectURL } });

      // Prevent the access
      return false;
    }
  }
}
