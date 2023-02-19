import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetDomain } from "app/core/domain-provider/domain-provider";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class LeadSourceService {

  constructor(private _http: HttpClient) {}
  public getLeadSources(
    query?:string,
    limit?: number,
    page?: number
  ): Observable<any> {
    return this._http.get(
      `${GetDomain("BUSINESS")}/LeadSource/GetLeadSourceInfo`
    );
  }

  public getLeadSourcesById(id): Observable<any> {
    let q = {
      SourceId: id,
    };
    return this._http.post(
      `${GetDomain("BUSINESS")}/LeadSource/GetLeadSourceInfoById`,
      q
    );
  }

  public saveLeadSources(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/LeadSource/InsertLeadSourceInfo`,
      data
    );
  }

  public updateLeadSources(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/LeadSource/UpdateLeadSourceInfo`,
      data
    );
  }

  public deleteLeadSources(id: any): Observable<any> {
    const payload={
      "SourceId": id,
      "UpdatedBy":2
    }

    return this._http.post(
      `${GetDomain("BUSINESS")}/LeadSource/DeleteLeadSourceInfo`,payload
    );
  }
}
