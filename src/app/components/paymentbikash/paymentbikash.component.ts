import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-paymentbikash',
  templateUrl: './paymentbikash.component.html',
  styleUrls: ['./paymentbikash.component.css']
})
export class PaymentbikashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	/*
  	const BKash = require('bkash');
  	const clientOptions = {
  		mode: 'sandbox', // sandbox/pay
  		type: 'checkout' // checkout/payments
	}

	const bkash = new BKash(clientOptions);

	bkash.queryPayment({
  		paymentID: '42'
	}).then(({ data, error, headers, meta }) => {
  		// data  -> HTTP Status Code < 400
  		// error -> HTTP Status Code >= 400
	}).catch(err => {
  		// HTTP Status Code >= 500
	})
	*/
  }

}