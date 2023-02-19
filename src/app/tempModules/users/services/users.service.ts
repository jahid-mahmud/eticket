import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getDomain } from '@swimlane/ngx-charts';
import { GetDomain } from 'app/core/domain-provider/domain-provider';
import { UserService } from 'app/core/user/user.service';
import { user } from 'app/mock-api/common/user/data';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClient: HttpClient, private _userService: UserService) { }

  getUsers(search = null, pageSize, pageNumber, account_type, current_status, newsletter_subscription, sort_by): Observable<any> {
    return this._httpClient.get(
      `${GetDomain("UAM")}/user/list?&size=${pageSize}&page=${pageNumber}&search=${search}&account_type=${account_type}&current_status=${current_status}&newsletter_subscription=${newsletter_subscription}&sort_by=${sort_by}`,

    )
  }
  getHeavyDetails(id): Observable<any> {
    return this._httpClient.get(
      `${GetDomain("UAM")}/user/${id}`,
    )
  }
  approveUser(id: any, approve, lang) {
    return this._httpClient.post(`${GetDomain("UAM")}/user/approve/${id}`, {
      "approved": approve,
      language: lang
    }, {
      observe: 'events',
      reportProgress: true
    });
  }
  uodateUserProfile(formData) {
    return this._httpClient.put(`${GetDomain("UAM")}/user/update`, formData);
  }
  updateClientUserProfile(id: any, payload) {
    return this._httpClient.put(`${GetDomain("UAM")}/user/update/${id}`, payload);
  }

  deleteClientUserProfile(id: any) {
    return this._httpClient.delete(`${GetDomain("UAM")}/user/delete/${id}`);
  }

  //   subscriber details --> api/client/1/subscriber-details/user/5
  // subscriber share history ---> api/share/1/user/5/history/list

  getSubsriberInfo(userId, clientId) {
    return this._httpClient.get(`${GetDomain("UAM")}/client/${clientId}/subscriber-details/user/${userId}`);
  }
  getCrowdInvestmentSubsriberInfo(id) {
    return this._httpClient.get(`${GetDomain("UAM")}/loan/user_details_by_investors/${id}`);
  }

  getTransaction(userId, clientId, share_status) {
    return this._httpClient.get(`${GetDomain("UAM")}/share/history/list?client=${clientId}&user=${userId}&share_status=${share_status}`);
  }
  getInvestments(user, loan, is_approved) {
    return this._httpClient.get(`${GetDomain("UAM")}/loan/investment_list?user=${user}&loan=${loan}&is_approved=${is_approved}`);
  }
  getTransactionAsSuperAdmin(userId, share_status) {
    return this._httpClient.get(`${GetDomain("UAM")}/share/history/list?user=${userId}&share_status=${share_status}`);
  }
  getSubscriberInfoWithTransactionInfo(userId, clientId) {
    return this._httpClient.get(`${GetDomain("UAM")}/user/heavy_details/${userId}?client=${clientId}`);
  }
  downloadUserList() {
    return this._httpClient.get(`${GetDomain("UAM")}/user/download_user`, { responseType: 'text' });
  }

}
