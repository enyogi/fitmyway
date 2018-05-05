import { Component, OnInit } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { ActivityPage } from '../detail/activity';
import { UserComponent } from '../../../components/user/user.component';
import { User } from '../../../components/user/user';

@Component({
  selector: 'page-activitychoose',
  templateUrl: 'activitychoose.html',
})
export class ActivitychoosePage implements OnInit {

  user: User;
  
  ngOnInit(): void {
    this.user = this.userComponent.CurrentUser();
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userComponent: UserComponent) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitychoosePage');
  }
  drPlanClick(event) {
    this.navCtrl.push(ActivityPage, {
      type: 1
    });
  }
  customPlanClick(event) {
    this.navCtrl.push(ActivityPage, {
      type: 0
    });
  }
}
