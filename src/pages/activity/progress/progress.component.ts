import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'activity-progress',
  templateUrl: 'progress.html'
})
export class ActivityProgressPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
}
