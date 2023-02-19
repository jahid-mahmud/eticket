import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { InitialData } from "app/app.types";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { defaultNavigation } from "./app.navigation";
import { AuthService } from "./core/auth/auth.service";
import { Roles } from "./core/config/system.config";
import { _filterThroughFeatureGuard } from "./core/feature-guard/feature-guard";
import { UserService } from "./core/user/user.service";

@Injectable({
  providedIn: "root",
})
export class InitialDataResolver implements Resolve<any> {
  /**
   * Constructor
   */
  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthService,
    private _userService: UserService
  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Use this resolver to resolve initial mock-api for the application
   *
   * @param route
   * @param state
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<InitialData> {
    // Fork join multiple API endpoint calls to wait all of them to finish
    // return of();

    return this._authService.getLoggedInUser().pipe(
      switchMap((response: any) => {
        // for now there is no user profile for super admin so default navigation for super admin

        // temporary user 

        let user = response.user_profile.user;


        // chekcs whether the admin is not a superadmin and is a enterprise admin and created a separate navigation for enterprise admin
        if (response.role === 'Admin') {

          user.roles = [Roles.ADMIN];
        }
        if (response.role === 'Enterprise') {

          user.roles = [Roles.ENTERPRISE];
        }
        if (response.role === 'Private') {
          user.roles = [Roles.PRIVATE];
        }

        user = this._getUserMap(user);
        this._userService.user = {
          ...user
        };


        // this._userService.user = {
        //   ...response.user_profile?.user,
        // };
        this._userService.userProfile={
          ...response.user_profile
        }


        return of(
          {
            //as we are using others now so keeping them empty for now - sangit
            messages: [],
            navigation: {
              compact: _filterThroughFeatureGuard(user.roles, defaultNavigation),
              futuristic: _filterThroughFeatureGuard(
                user.roles,
                defaultNavigation
              ),
              horizontal: _filterThroughFeatureGuard(
                user.roles,
                defaultNavigation
              ),
              default: _filterThroughFeatureGuard(user.roles, defaultNavigation),
            },
            notifications: [],
            shortcuts: [],
            user,
          }
        );
      })
    );
  }

  private _getUserMap(user: any): any {
    let data = {};
    user.roles?.forEach((role) => {
      data[role] = role;
    });
    user.rolesMap = data;
    return user;
  }
}
