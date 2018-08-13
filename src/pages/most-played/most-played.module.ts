import { ComponentsModule } from './../../components/components.module';
import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostPlayedPage } from './most-played';
import { ProgressBarComponent } from "../../components/progress-bar/progress-bar";

@NgModule({
  declarations: [
    MostPlayedPage,
    ProgressBarComponent,
    ComponentsModule,
  ],
  imports: [
    IonicPageModule.forChild(MostPlayedPage),
  ],
})
export class MostPlayedPageModule {}
