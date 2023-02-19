import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private _userS: UserService) { }

  public hasPermission(permission: string[] = ['admin']): boolean {

    const roles= permission.some(role => this._userS.user.rolesMap[role]);
    return roles;
  }

}
