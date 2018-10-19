import { SubscriptionPage } from './../subscription/subscription';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  openSubscriptionPage(){
    this.navCtrl.push(SubscriptionPage);
  }
}
