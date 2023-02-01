import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'

})
export class PaymentGatwayService {

  url = environment.baseUrl;
  constructor(private http: HttpClient) { }
  public setPaymentGatway(data: any): Observable<any> {
    // const option = { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    return this.http.post(this.url + "paymentGateway/get", data)
  }
}
