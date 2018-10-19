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

            
            var paydunya = require('paydunya');
            var setup = new paydunya.Setup({
              masterKey: 'H4N6ERTM-Op5E-OZZI-Fklh-HKQtFLvgf1md',
              privateKey: 'test_private_4x6DiT5ljNg6CPvoTKLgyHLHEwh',
              publicKey: 'test_public_1MZVDxsLMtNgOH2R9eWDjQrWRaK',
              token: 'hWuSBo88rgVDJUczIymv',
              mode: 'test' // Optionnel. Utilisez cette option pour les paiements tests.
            });

            var store = new paydunya.Store({
              name: 'stream-market', // Seul le nom est requis
              tagline: "",
              phoneNumber: '',
              postalAddress: '',
              websiteURL: ' http://localhost:8100/ ',
              logoURL: ''
            });

// Le code suivant décrit comment créer une facture de paiement au niveau de nos serveurs,
// rediriger ensuite le client vers la page de paiement
// et afficher ensuite son reçu de paiement en cas de succès.
var invoice = new paydunya.CheckoutInvoice(setup, store);

//invoice.addItem('Chemise Glacée', 1, 5000, 5000);
this.albums.forEach(album => {
  invoice.addItem(album.name, 1, album.price);
});

this.tracks.forEach(track => {
  invoice.addItem(track.title, 1, track.price);
});

invoice.totalAmount = this.totalCost();

invoice.create()
  .then(function (){
    console.log(invoice.status);
    console.log(invoice.token); // Token de facture
    console.log(invoice.responseText);
    console.log(invoice.url); // URL de redirection de paiement de facture PayDunya
  })
  .catch(function (e) {
    console.log(e);
  });

          }
        }
      ]
    });
    alert.present();
  }
}
