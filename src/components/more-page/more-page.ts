import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";
/**
 * Generated class for the MorePageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'more-page',
  templateUrl: 'more-page.html'
})
export class MorePageComponent {

  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}
