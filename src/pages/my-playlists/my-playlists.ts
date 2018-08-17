import { CreatePlaylistPage } from './../create-playlist/create-playlist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
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

  // openCreatePlaylistPage(){
  //   this.navCtrl.push(CreatePlaylistPage);
  // }

  addPlaylist() {
    let addModal = this.modalCtrl.create('CreatePlaylistPage');
    addModal.onDidDismiss(playlist => {
      if (playlist) {
        this.playlists.add(playlist);
      }
    })
    addModal.present();
  }

}
