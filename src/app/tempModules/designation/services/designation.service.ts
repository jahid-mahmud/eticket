import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetDomain } from "app/core/domain-provider/domain-provider";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DesignationService {
  constructor(private _http: HttpClient) {}
  public getDesignations(
    query?:string,
    limit?: number,
    page?: number
  ): Observable<any> {
    return this._http.get(
      `${GetDomain("BUSINESS")}/Designation/GetDesignationInfo`
    );
  }

  public getDesignationById(id): Observable<any> {
    let q = {
      DesignationId: id,
    };
    return this._http.post(
      `${GetDomain("BUSINESS")}/Designation/GetDesignationInfoById`,
      q
    );
  }

  public saveDesignation(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/Designation/InsertDesignation`,
      data
    );
  }

  public updateDesignation(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/Designation/UpdateDesignation`,
      data
    );
  }

  public deleteDesignation(id: any): Observable<any> {
    let payload=
    {
           "DesignationId":id,
           "UpdatedBy":2
    }
    return this._http.post(
      `${GetDomain("BUSINESS")}/Designation/DeleteDesignation`,payload
    );
  }
}
