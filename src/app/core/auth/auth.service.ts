import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "app/core/user/user.service";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Roles } from "../config/system.config";
import { GetDomain } from "../domain-provider/domain-provider";

@Injectable()
export class AuthService {
  private _authenticated: boolean = false;

  /**
   * Constructor
   */
  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    private _userService: UserService
  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Forgot password
   *
   * @param email
   */
  forgotPassword(email: string): Observable<any> {
    return this._httpClient.post(`${GetDomain("UAM")}/user/forget_password`, {
      email: email,
    });
  }

  //change pass
  chnagePassword(payload): Observable<any> {
    return this._httpClient.post(`${GetDomain("UAM")}/user/change_password`,payload);
  }
  //change emial

  chnageEmail(payload): Observable<any> {
    return this._httpClient.put(`${GetDomain("UAM")}/user/change_email`,payload);
  }

  addNewAdmin(payload){
    return this._httpClient.post(`${GetDomain("UAM")}/user/create-new-admin`,payload);
  }

  /**
   * Reset password
   *
   * @param password
   */
  resetPassword(payload: any): Observable<any> {
    return this._httpClient.post(
      `${GetDomain("UAM")}/user/reset_password`,
      payload
    );
  }

  setPassword(password: string, setPasswordToken: string): Observable<any> {
    return this._httpClient.post(
      `${GetDomain("UAM")}/auth/self/set-password/${setPasswordToken}`,
      { newPassword: password }
    );
  }

  activeAccount(activeToken: string): Observable<any> {
    return this._httpClient.post(
      `${GetDomain("UAM")}/auth/self/activate-account/${activeToken}`,
      { activationToken: activeToken }
    );
  }

  /**
   * Sign in
   *
   * @param credentials
   */
  signIn(credentials: { email: string; password: string }): Observable<any> {
    if (this._authenticated) {
      return throwError("User is already logged in.");
    }
    debugger
    // return of(response);

    return this._httpClient
      .post(`${GetDomain("UAM")}/Validate/GenerateToken`, credentials)
      .pipe(
        map((response: any) => {
          console.log('authres',response)
          debugger
          // Set the authenticated flag to true
          this._authenticated = true;
          // localStorage.setItem("refresh", response.refresh);
          localStorage.setItem("token", response.access);
          let user = response.user;
          this._userService.user = {
            ...user,
          };
          return of(response);
        })
      );
  }

  getAccessToken() {
    const token = localStorage.getItem("token") || "";
    return token;
  }


  setLoggedInUser(): Observable<boolean> {
    //if not auth lets check for auth
    return this.getLoggedInUser().pipe(
      catchError(() => {
        // Return false
        this._authenticated = false;
        return of(false);
      }),
      map((response: any) => {
        // Set the authenticated flag to true
        if (response) {
          let user = response?.user_profile?.user;
          if (response.role === "Admin") {
            user.roles = [Roles.ADMIN];
          }
          if (response.role === "Enterprise") {
            user.roles = [Roles.ENTERPRISE];
          }
          if (response.role === "Private") {
            user = response.user_profile.user;
            user.roles = [Roles.PRIVATE];
          }
          this._userService.user = {
            ...user,
          };

          this._userService.userProfile = {
            ...response.user_profile,
          };
          this._authenticated = true;
          return true;
        } else {
          return false;
        }
      })
    );
  }

  getLoggedInUser(): Observable<any> {
    let profile = {"id":43,"user_profile":{"id":36,"name":null,"access_level":{"id":4,"name":"SuperAdmin","description":"CCF Admin"},"user":{"id":43,"username":"admin@gmail.com","last_login":"2022-09-06T14:13:02.485000+06:00","date_joined":"2022-04-26T01:56:38.097000+06:00","email":"admin@gmail.coop","is_active":true,"first_name":"Satez","last_name":"Satata","temp_token":"22e41e78510d9f03cf9ca7363071ff86"},"image":null,"cover_image":null,"phone":"+93432122233","address_line1":"Midas Center, Road 16, Dhanmondi, Dhaka 1209, Bangladesh","address_line2":null,"house":null,"street":null,"city":"Dhaka","zip_code":"1209","country":"Austria","profession":"null","date_of_birth":"2022-07-15T06:00:00+06:00","salutation":"Mr","iban":"n/a","account_type":"company","company_name":"Secure Link Services Group","bic":null,"document2":null,"document3":null,"document4":null,"issue_date":"2022-04-25T04:00:00+06:00","expire_date":"1970-01-01T06:00:00+06:00","line_of_business":"Software Engineering","commercial_register_number":"8085","is_verified":true,"document_type":"National Identification Card","document_number":"n/a","user_type":"online","issuing_authority":"n/a","current_status":"activated","is_newsletter_subscription":true,"first_transaction_date":null},"role":"Admin"}
    return of(profile)
  }

  refreshToken(): Observable<any> {
    return this._httpClient
      .post(`${GetDomain("UAM")}/user/token/refresh`, {
        refresh: localStorage.getItem("refresh"),
      })
      .pipe(
        tap((res) => {
          if(res?.access){
            localStorage.setItem("token", res?.access);
          }
        })
      );
  }

  /**
   * Sign out
   */
  signOut() {
    // this._httpClient.get(`${GetDomain("UAM")}/auth/signout`).subscribe(() => {
    //   // Set the authenticated flag to false
    //   this._authenticated = false;
    //   this._router.navigate(["sign-in"]);
    //   // Return the observable
    // });
    this._authenticated = false;
    this._router.navigate(["sign-in"]);
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
  }

  signOutWhileExpire() {
    this._authenticated = false;
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    this._router.navigate(["sign-in"]);
  }

  /**
   * Sign up
   *
   * @param user
   */
  // signUp(user: {
  //   name: string;
  //   email: string;
  //   password: string;
  //   company: string;
  // }): Observable<any> {
  //   return this._httpClient.post(`${GetDomain("UAM")}/user/register`, user);
  // }

  signUp(payload: any, files: any[]): Observable<any> {
    const formData = new FormData();
    formData.append("access_level", "Admin");
    formData.append("country", payload.country);
    formData.append("phone", payload.mobile);
    formData.append("city", payload.city);
    formData.append("address_line1", payload.address);
    formData.append("zip_code", payload.postCode);
    formData.append("profession", payload.profession);
    formData.append("iban", payload.iBan);
    formData.append("issuing_authority", payload.issuingAuthority);
    formData.append("salutation", payload.salutation);
    formData.append("bic", payload.bic);
    formData.append("account_type", payload.investorTtype?.toLowerCase());
    formData.append("first_name", payload.firstName);
    formData.append("last_name", payload.surName);
    formData.append("email", payload.email);
    formData.append("document_type", payload.documentType);
    formData.append("document_number", payload.documentNumber);
    formData.append("issue_date", payload.issueDate);
    formData.append("expire_date", payload.expiryDate);
    formData.append("is_newsletter_subscription", payload.newsLetterSubscribed);
    formData.append("date_of_birth", payload.dateOfBirth);
    formData.append('language',payload.language);
    if (payload.document) {
      formData.append("document1", payload.document);
    }
    if (payload.companyName) {
      formData.append("company_name", payload.companyName);
    }
    if (payload.companyRegNumber) {
      formData.append("commercial_register_number", payload.companyRegNumber);
    }
    if (payload.objectOfBusiness) {
      formData.append("line_of_business", payload.objectOfBusiness);
    }
    // formData.append("house", payload.houseNo);
    // formData.append("street", payload.roadNo);
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append(`document${i + 1}`, files[i]);
      }
    }

    return this._httpClient.post(`${GetDomain("UAM")}/user/register`, formData);
  }

  /**
   * Check the authentication status
   */
  async check(): Promise<boolean> {
    // Check if the user is logged in
    try {
      if (this._authenticated) {
        return true;
      }
      return await this.setLoggedInUser().toPromise();
    } catch (error) {
      this._authenticated = false;
      return false;
    }
  }
  hasRole(roles: any[]) {
    if (this._authenticated && !this._userService.user) {
      return false;
    }
    if (
      this._authenticated &&
      this._userService.user.roles &&
      this._userService.user.roles.length
    ) {
      // console.log('has role', this._userService.user.roles.some((item) => roles.includes(item)))
      return this._userService.user.roles.some((item) => roles.includes(item));
    } else return false;
  }
}
