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
  showSlide: boolean;
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
    this.showSlide = false;
    this.endpointApi.LoadActivities(this._user.Id).subscribe((response: Activity[]) => {
      this.activities = response;
      //this.activities = response; 
      setTimeout(() => {
        this.slides.initialSlide = 30;
        this.currentSlide = this.activities[this.slides.initialSlide];
        this.currentSlide.IsPrescribed = true;
        this.slides.slideTo(this.slides.initialSlide, 0)
        this.showSlide = true;
        }, 300);
    });
  }
  startActivity() {
    this.navCtrl.push(ActivityDetailPage, {activtyId: this.currentSlide.ActivityId});
  }
  slideChanged() {
    this.currentSlide = this.activities[this.slides.getActiveIndex()];
    console.log('slide changed');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
  }

}
