import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetDomain } from "app/core/domain-provider/domain-provider";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private _http: HttpClient) {}
  public getProduct(
    query?:string,
    limit?: number,
    page?: number
  ): Observable<any> {
    return this._http.get(
      `${GetDomain("BUSINESS")}/Product/GetProductsInfo`
    );
  }

  public getProductById(id): Observable<any> {
    let q = {
      ProductId: id,
    };
    return this._http.post(
      `${GetDomain("BUSINESS")}/Product/GetProductsInfoById`,
      q
    );
  }

  public saveProduct(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/Product/InsertProductsInfo`,
      data
    );
  }

  public updateProduct(data: any): Observable<any> {
    return this._http.post(
      `${GetDomain("BUSINESS")}/Product/UpdateProductsInfo`,
      data
    );
  }

  public deleteProduct(id: string): Observable<any> {
    const payload={
      "ProductId": id,
      "UpdatedBy":2
    }

    return this._http.post(
      `${GetDomain("BUSINESS")}/Product/DeleteProductsInfo`,payload
    );
  }
}
