import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaddyPage } from './caddy';

@NgModule({
  declarations: [
    CaddyPage,
  ],
  imports: [
    IonicPageModule.forChild(CaddyPage),
  ],
})
export class CaddyPageModule {}
