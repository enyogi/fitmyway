import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActivityPageModule } from '../pages/activity/activity.module';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePage } from '../pages/profile/profile';
import { DoctorPage } from '../pages/doctor/doctor';
import { DoctorItemPage } from '../pages/doctor-item/doctor-item.component';
import { ProgressBarComponent } from '../pages/progress/progress.component';
import { ActivityProgressPage } from '../pages/activity/progress/progress.component';
import { FriendsPage } from '../pages/friends/friends.component';
import { FriendItemPage } from '../pages/friend-item/friend-item.component';
import { AppointmentsPage } from '../pages/appointments/appointment';
import { AppointmentItemPage } from '../pages/appointment-item/appointment-item.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    DoctorPage,
    DoctorItemPage,
    ProgressBarComponent,
    ActivityProgressPage,
    FriendsPage,
    FriendItemPage,
    AppointmentsPage,
    AppointmentItemPage
  ],
  imports: [
    BrowserModule,
    ActivityPageModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    DoctorPage,
    ActivityProgressPage,
    FriendsPage,
    AppointmentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
