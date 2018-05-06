import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'activity-finish',
  templateUrl: 'activity-finish.component.html'
})
export class ActivityFinishPage {
    constructor(      
        public navCtrl: NavController, 
        public navParams: NavParams,
  ) {

  }
  continue() {
      this.navCtrl.pop();
  }

}