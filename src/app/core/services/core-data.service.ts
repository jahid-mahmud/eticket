import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDomain } from '../domain-provider/domain-provider';
import { QueryModel, SaveModel, UpdateModel } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class CoreDataService {

  constructor(private _http: HttpClient) { }

  public getData(query: QueryModel, limit?: number, page?: number): Observable<any> {
    let queryParam = '';
    if (typeof limit != 'undefined' && typeof page != 'undefined') {
      queryParam += `?limit=${limit}&page=${page}`;
    }
    return this._http.post(`${GetDomain("DATA_SERVICE")}/data-service/query${queryParam}`, query);
  }

  public saveData(data: SaveModel): Observable<any> {
    return this._http.post(`${GetDomain("DATA_SERVICE")}/data-service/command/insert`, data);
  }

  public updateData(data: UpdateModel): Observable<any> {
    return this._http.post(`${GetDomain("DATA_SERVICE")}/data-service/command/update`, data);
  }

}
