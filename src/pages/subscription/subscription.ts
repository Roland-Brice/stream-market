import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SubscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subscription',
  templateUrl: 'subscription.html',
})
export class SubscriptionPage {
  plans: any
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.plans = [
      {title: 'Premium monthly', length: 30, price:'1000'},
      {title: 'Premium half-a-year', length: 30*6, price:'4500'},
      {title: 'Premium year', length: 30*12, price:'9500'},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscriptionPage');
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: "Do you want to subscribe to this plan ?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
}
