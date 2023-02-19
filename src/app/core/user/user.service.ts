import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'app/core/user/user.model';
import { UserProfile } from 'app/tempModules/interfaces/user-profile';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);
    private _userProfile: ReplaySubject<UserProfile> = new ReplaySubject<UserProfile>(1);
    private _currentUserProfile: any;
    private _currentUser: User;
    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: User) {
        // Store the value
        this._currentUser = value;
        this._user.next(value);
    }

    get user() {
        return this._currentUser;
    }

    get user$(): Observable<User> {
        return this._user.asObservable();
    }

    set userProfile(value: UserProfile) {
        // Store the value
        this._currentUserProfile = value;
        this._userProfile.next(value);
    }

    get userProfile() {
        return this._currentUserProfile;
    }

    get userProfile$(): Observable<UserProfile> {
        return this._userProfile.asObservable();
    }



}
