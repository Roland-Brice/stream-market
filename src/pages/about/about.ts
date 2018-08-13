import { MyPlaylistsPage } from './../my-playlists/my-playlists';
import { MostPlayedPage } from './../most-played/most-played';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  openMostPlayedPage(){
    this.navCtrl.push(MostPlayedPage);
  }

  openMyPlaylistsPage(){
    this.navCtrl.push(MyPlaylistsPage)
  }
}
