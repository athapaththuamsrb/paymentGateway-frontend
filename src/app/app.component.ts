import { getLocaleCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { PaymentGatwayService } from 'src/core/services/payment-gatway.service';
var sha1 = require('sha1');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lia-codegen';
  sandboxForm = new FormGroup({
    TIMESTAMP: new FormControl(""),
    MERCHANT_ID: new FormControl(""),
    ACCOUNT: new FormControl("internet"),
    ORDER_ID: new FormControl("N6qsk4kYRZihmPrTXWYS6g"),
    AMOUNT: new FormControl("1999"),
    CURRENCY: new FormControl("EUR"),
    AUTO_SETTLE_FLAG: new FormControl("1"),
    COMMENT1: new FormControl("Mobile Channel"),
    HPP_VERSION: new FormControl("2"),
    HPP_CHANNEL: new FormControl("ECOM"),
    HPP_LANG: new FormControl("en"),
    HPP_CUSTOMER_EMAIL: new FormControl("test@example.com"),
    HPP_CUSTOMER_PHONENUMBER_MOBILE: new FormControl("44|789456123"),
    HPP_BILLING_STREET1: new FormControl("Flat 123"),
    HPP_BILLING_STREET2: new FormControl("House 456"),
    HPP_BILLING_STREET3: new FormControl("Unit 4"),
    HPP_BILLING_CITY: new FormControl("Halifax"),
    HPP_BILLING_POSTALCODE: new FormControl("W5 9HR"),
    HPP_BILLING_COUNTRY: new FormControl("826"),
    HPP_SHIPPING_STREET1: new FormControl("Apartment 852"),
    HPP_SHIPPING_STREET2: new FormControl("Complex 741"),
    HPP_SHIPPING_STREET3: new FormControl("House 963"),
    HPP_SHIPPING_CITY: new FormControl("Chicago"),
    HPP_SHIPPING_STATE: new FormControl("IL"),
    HPP_SHIPPING_POSTALCODE: new FormControl("50001"),
    HPP_SHIPPING_COUNTRY: new FormControl("840"),
    HPP_ADDRESS_MATCH_INDICATOR: new FormControl("FALSE"),
    HPP_CHALLENGE_REQUEST_INDICATOR: new FormControl("NO_PREFERENCE"),
    BILLING_CODE: new FormControl("59|123"),
    BILLING_CO: new FormControl("GB"),
    SHIPPING_CODE: new FormControl("50001|Apartment 852"),
    SHIPPING_CO: new FormControl("US"),
    CUST_NUM: new FormControl("6e027928-c477-4689-a45f-4e138a1f208a"),
    VAR_REF: new FormControl("Acme Corporation"),
    PROD_ID: new FormControl("SKU1000054"),
    MERCHANT_RESPONSE_URL: new FormControl("https://www.example.com/responseUrl"),
    CARD_PAYMENT_BUTTON: new FormControl("Pay Invoice"),
    CUSTOM_FIELD_NAME: new FormControl("Custom Field Data"),
    SHA1HASH: new FormControl(""),
  })
  constructor(private paymentGatwayService: PaymentGatwayService) { }
  onSubmit() {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const monthSt = month < 10 ? "0" + month : month;
    const day = date.getUTCDate();
    const daySt = day < 10 ? "0" + day : day;
    const hour = date.getUTCHours();
    const hourSt = hour < 10 ? "0" + hour : hour;
    const minutes = date.getUTCMinutes();
    const minutesSt = minutes < 10 ? "0" + minutes : minutes;
    const secound = date.getUTCSeconds();
    const secoundSt = secound < 10 ? "0" + secound : secound;
    const timeStamp = year + "" + monthSt + "" + daySt + "" + hourSt + "" + minutesSt + "" + secoundSt

    // const merchantId = "dev207328675986663817";
    // const sharedSecret = "pE2K6ONAy2";
    // const hashSquance1 = `${timeStamp}.${merchantId}.${this.sandboxForm.get("ORDER_ID")?.value}.${this.sandboxForm.get("AMOUNT")?.value}.${this.sandboxForm.get("CURRENCY")?.value}`;
    // const hash1 = sha1(hashSquance1);
    // const hashSquance2 = `${hash1}.${sharedSecret}`;
    // const hash2 = sha1(hashSquance2);
    // this.sandboxForm.patchValue({ "TIMESTAMP": timeStamp, "MERCHANT_ID": merchantId, SHA1HASH: hash2 });
    // console.log(this.sandboxForm.value);

    // let encoded = Object.entries(this.sandboxForm.value).map(([key, value]) => {
    //   return encodeURIComponent(key) + '=' + encodeURIComponent(value!);
    // });
    // let reqBody = encoded.join("&");
    // console.log(reqBody)
    this.paymentGatwayService.setPaymentGatway(this.sandboxForm.value).subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    )
  }

}
