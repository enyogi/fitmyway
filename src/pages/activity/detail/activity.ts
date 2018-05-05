import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/** 
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  type: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type = this.navParams.get('type');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
  }

}
