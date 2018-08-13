import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyPlaylistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-playlists',
  templateUrl: 'my-playlists.html',
})
export class MyPlaylistsPage {
  playlists: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.playlists = [
      {title: 'Something About You'},
      {title: 'Run'},
      {title: 'Breathe'},
      {title: 'HyperParadise'},
      {title: 'Lifespan'},
      {title: 'Stay High'},
      {title: 'Lean On'},
      {title: 'They Say'}
  ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPlaylistsPage');
  }

}
