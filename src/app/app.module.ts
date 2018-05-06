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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    DoctorPage,
    DoctorItemPage
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
    DoctorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
