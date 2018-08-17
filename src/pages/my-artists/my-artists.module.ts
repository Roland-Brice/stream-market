import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyArtistsPage } from './my-artists';

@NgModule({
  declarations: [
    MyArtistsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyArtistsPage),
  ],
})
export class MyArtistsPageModule {}
