import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class PaymentGatwayService {

  url = "https://pay.sandbox.realexpayments.com/pay";
  constructor(private http: HttpClient) { }
  public setPaymentGatway(data: string): Observable<any> {
    let options = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', "Access-Control-Allow-Origin": "*" }
    };
    console.log(options);

    return this.http.post(this.url, data.toString(), options)
  }
}
