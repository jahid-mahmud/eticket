import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetDomain } from "app/core/domain-provider/domain-provider";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  constructor(private _http: HttpClient) {}
  public getActivitys(
    query?: string,
    limit?: number,
    page?: number
  ): Observable<any> {
    return this._http.get(
      `${GetDomain("BUSINESS")}/Activities/GetActivitiesInfo`
    );
  }

  public getActivityById(id): Observable<any> {
    let q = {
      ActivityId: id,
    };
    return this._http.post(
      `${GetDomain("BUSINESS")}/Activities/GetActivitiesInfoById`,
      q
    );
  }

  public saveActivity(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/Activities/InsertActivities`,
      data
    );
  }

  public updateActivity(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/Activities/UpdateActivities`,
      data
    );
  }

  public deleteActivity(id: string): Observable<any> {
    const payload = {
      ActivityId: id,
      "UpdatedBy":2
    };
    return this._http.post(
      `${GetDomain("BUSINESS")}/Activities/DeleteActivites`,
      payload
    );
  }
}
