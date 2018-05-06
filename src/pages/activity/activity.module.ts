import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityPage } from './slider/activity';
import { ActivitychoosePage } from './chooser/activitychoose';
import { ActivityDetailPage } from './detail/activity.component';
import { ActivityFinishPage } from './finish/activity-finish.component';

@NgModule({
  declarations: [
    ActivityPage,
    ActivitychoosePage,
    ActivityDetailPage,
    ActivityFinishPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityPage),
    IonicPageModule.forChild(ActivitychoosePage),
    IonicPageModule.forChild(ActivityDetailPage),
    IonicPageModule.forChild(ActivityFinishPage),

  ], 
})
export class ActivityPageModule {}
