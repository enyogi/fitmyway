import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {

    btnSelected = 3;
    activities = new Array<number>();

    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.activities.push(1);  
      this.activities.push(3);  
      this.activities.push(22);  
      this.activities.push(65);  
    }

    select(btnId: number) {
      this.btnSelected = btnId;
    }
}
