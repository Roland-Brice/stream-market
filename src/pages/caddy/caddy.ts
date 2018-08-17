import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CaddyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-caddy',
  templateUrl: 'caddy.html',
})
export class CaddyPage {
  
  tracks: any;
  albums: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.tracks = [
      {title: 'Something About You', artist: 'ODESZA',price:500},
      {title: 'Run', artist: 'Allison Wonderland',price:500},
      {title: 'Breathe', artist: 'Seeb Neev',price:500},
      {title: 'HyperParadise', artist: 'Hermitude',price:500},
  ];
    this.albums = [
      {name: 'Lifes', artist: 'Vaults',price:2500},
      {name: 'Stay', artist: 'Tove Lo',price:2500},
      {name: 'Lean', artist: 'Major Lazer',price:2500},
      {name: '8 Say', artist: 'Kilter',price:3500},
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaddyPage');
  }

  totalCost(){
    let trackPrice = 0
    let albumPrice = 0
    this.tracks.forEach(element => {
      trackPrice += element.price; 
    });
    this.albums.forEach(element => {
      albumPrice += element.price;
    });

    return trackPrice + albumPrice;
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: "Do you want to buy those items, you can unselect what you don't need",
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
            
            console.log(this.totalCost())
          }
        }
      ]
    });
    alert.present();
  }
}
