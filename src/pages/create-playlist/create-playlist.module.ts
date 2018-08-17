import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePlaylistPage } from './create-playlist';

@NgModule({
  declarations: [
    CreatePlaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePlaylistPage),
  ],
})
export class CreatePlaylistPageModule {}
