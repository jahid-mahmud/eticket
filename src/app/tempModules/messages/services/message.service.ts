import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetDomain } from "app/core/domain-provider/domain-provider";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private _http: HttpClient) {}
  public getMessage(
    query?:string,
    limit?: number,
    page?: number
  ): Observable<any> {
    return this._http.get(
      `${GetDomain("BUSINESS")}/Message/GetMessageInfo`
    );
  }

  public getMessageById(id): Observable<any> {
    let q = {
      MessageId: id,
    };
    return this._http.post(
      `${GetDomain("BUSINESS")}/Message/GetMessageInfoById`,
      q
    );
  }

  public saveMessage(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/Message/InsertMessagesInfo`,
      data
    );
  }

  public updateMessage(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/Message/UpdateMessagesInfo`,
      data
    );
  }

  public deleteMessage(id: any): Observable<any> {
    const payload={
      "MessageId": id,
      "UpdatedBy":2
    }
    return this._http.post(
      `${GetDomain("BUSINESS")}/Message/DeleteMessageInfo`,payload
    );
  }
}
