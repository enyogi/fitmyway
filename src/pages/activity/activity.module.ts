import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityPage } from './slider/activity';
import { ActivitychoosePage } from './chooser/activitychoose';
import { ActivityDetailPage } from './detail/activity.component';

@NgModule({
  declarations: [
    ActivityPage,
    ActivitychoosePage,
    ActivityDetailPage
  ],
  imports: [
    IonicPageModule.forChild(ActivityPage),
    IonicPageModule.forChild(ActivitychoosePage),
    IonicPageModule.forChild(ActivityDetailPage),
  ], 
})
export class ActivityPageModule {}
