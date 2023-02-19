import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetDomain } from "app/core/domain-provider/domain-provider";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoleMappingService {
  constructor(private _http: HttpClient) {}
  public getRoleMappings(
    query?:string,
    limit?: number,
    page?: number
  ): Observable<any> {
    return this._http.get(
      `${GetDomain("BUSINESS")}/ActivityRoleMapping/GetActivityRoleMappingInfo`
    );
  }

  public getRoleMappingById(id): Observable<any> {
    let q = {
      RoleMappingId: id,
    };
    return this._http.post(
      `${GetDomain("BUSINESS")}/ActivityRoleMapping/GetActivityRoleMappingInfoById`,
      q
    );
  }

  public saveRoleMapping(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/ActivityRoleMapping/InsertActivityRoleMapping`,
      data
    );
  }

  public updateRoleMapping(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/ActivityRoleMapping/UpdateActivityRoleMapping`,
      data
    );
  }

  public deleteRoleMapping(id: any): Observable<any> {
    const payload={
      "RoleMappingId": id,
      "UpdatedBy":2
    }
    return this._http.post(
      `${GetDomain("BUSINESS")}/ActivityRoleMapping/DeleteActivityRoleMapping`,payload
    );
  }
}
