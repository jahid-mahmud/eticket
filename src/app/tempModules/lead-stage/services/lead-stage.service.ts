import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetDomain } from "app/core/domain-provider/domain-provider";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LeadStageService {
  constructor(private _http: HttpClient) {}
  public getLeadStage(
    query?:string,
    limit?: number,
    page?: number
  ): Observable<any> {
    return this._http.get(
      `${GetDomain("BUSINESS")}/LeadStage/GetLeadStageInfo`
    );
  }

  public getLeadStageById(id): Observable<any> {
    let q = {
      LeadStageId: id,
    };
    return this._http.post(
      `${GetDomain("BUSINESS")}/LeadStage/GetLeadStageInfoById`,
      q
    );
  }

  public saveLeadStage(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/LeadStage/InsertLeadStageInfo`,
      data
    );
  }

  public updateLeadStage(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/LeadStage/UpdateLeadStageInfo`,
      data
    );
  }

  public deleteLeadStage(id: any): Observable<any> {
    const payload={
      "LeadStageId": id,
      "UpdatedBy":2
    }
    return this._http.post(
      `${GetDomain("BUSINESS")}/LeadStage/DeleteLeadStageInfo`,payload
    );
  }
}
