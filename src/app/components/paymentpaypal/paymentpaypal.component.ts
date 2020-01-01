import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-paymentpaypal',
  templateUrl: './paymentpaypal.component.html',
  styleUrls: ['./paymentpaypal.component.css']
})

export class PaymentpaypalComponent implements OnInit {

	public payPalConfig?: IPayPalConfig;
	showSuccess: boolean = false;

  	constructor() { }

  	ngOnInit() {
  		this.initConfig();
  	}


  	private initConfig(): void {
		this.payPalConfig = {
			currency: 'CAD',
			clientId: 'AYBFLJfIROthqq1squeUgf65IMZAvPbGuTbH-GkaVYjsYt7xr0x3iL0qlrCEa-AcWZow7jA2P8bgrtBg',
			createOrderOnClient: (data) => <ICreateOrderRequest>{
				intent: 'CAPTURE',
				purchase_units: [
			  	{
			    amount: {
			      currency_code: 'CAD',
			      value: '9.99',
			      breakdown: {
			        item_total: {
			          currency_code: 'CAD',
			          value: '9.99'
			        }
			      }
			    },
			    items: [
			      {
			        name: 'Enterprise Subscription',
			        quantity: '1',
			        category: 'DIGITAL_GOODS',
			        unit_amount: {
			          currency_code: 'CAD',
			          value: '9.99',
			        },
			      }
			    ]
			  }
			]
		},
		advanced: {
			commit: 'true'
		},
		style: {
			label: 'paypal',
			layout: 'vertical'
		},
		onApprove: (data, actions) => {
			console.log('onApprove - transaction was approved, but not authorized', data, actions);
			actions.order.get().then(details => {
		  		console.log('onApprove - you can get full order details inside onApprove: ', details);
			});
		},
		onClientAuthorization: (data) => {
			console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
			this.showSuccess = true;
		},
		onCancel: (data, actions) => {
			console.log('OnCancel', data, actions);
		},
		onError: err => {
			console.log('OnError', err);
		},
		onClick: (data, actions) => {
			console.log('onClick', data, actions);
		},
		};
	}

}
