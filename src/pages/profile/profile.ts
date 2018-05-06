import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityProgressPage } from '../activity/progress/progress.component';
import { FriendsPage } from '../friends/friends.component';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {

    btnSelected = 3;
    activities = new Array<number>();
    loadProgress = 76;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.activities.push(1);  
      this.activities.push(3);  
      this.activities.push(22);  
      this.activities.push(65);  
    }
    clickProgress() {
      this.navCtrl.push(ActivityProgressPage);
    }
    clickFriends() {
      this.navCtrl.push(FriendsPage);
    }
    select(btnId: number) {
      this.btnSelected = btnId;
    }
}
