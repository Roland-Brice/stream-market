import { ArtistDetailPage } from './../artist-detail/artist-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyArtistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-artists',
  templateUrl: 'my-artists.html',
})
export class MyArtistsPage {
  artists: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.artists = [
      {name: 'Youssou Ndour'},
      {name: 'Miriam Makeba'},
      {name: 'Angelique Kidjo'},
      {name: 'Cassper Nyovest'},
      {name: 'Jovi'},
      {name: 'Les Tetes Brulées'},
      {name: 'Dip Doundou Guiss'},
      {name: 'Random 1'}
  ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyArtistsPage');
  }

  openArtistDetailPage(){
    this.navCtrl.push(ArtistDetailPage);
  }
}
