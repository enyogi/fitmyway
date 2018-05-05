import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { EndpointapiComponent } from '../../../components/endpointapi/endpointapi';
import { UserComponent } from '../../../components/user/user.component';
import { User } from '../../../components/user/user';
import { Activity } from '../../../components/activity/activity';
import { ActivityDetailPage } from '../detail/activity.component';

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage implements OnInit {
  
  _user: User;
  activities: Activity[];
  currentSlide: Activity;

  type: number;
  
  @ViewChild(Slides) slides: Slides;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private endpointApi: EndpointapiComponent,
      private user: UserComponent) {
      this.type = this.navParams.get('type');
  }

  ngOnInit(): void {
    this._user = this.user.CurrentUser();
    this.activities = this.endpointApi.LoadActivities(this._user.Id);
    this.slides.initialSlide = 1;
    this.currentSlide = this.activities[1];
  }
  
  slideChanged() {
    this.currentSlide = this.activities[this.slides.getActiveIndex()];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
  }
  selectActivity(activity: Activity) {
    this.navCtrl.push(ActivityDetailPage, {activtyId: activity.Id});
  }

}
