import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPlaylistsPage } from './my-playlists';

@NgModule({
  declarations: [
    MyPlaylistsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPlaylistsPage),
  ],
})
export class MyPlaylistsPageModule {}
