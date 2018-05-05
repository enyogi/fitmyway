import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityPage } from './detail/activity';
import { ActivitychoosePage } from './chooser/activitychoose';

@NgModule({
  declarations: [
    ActivityPage,
    ActivitychoosePage
  ],
  imports: [
    IonicPageModule.forChild(ActivityPage),
  ],
})
export class ActivityPageModule {}
