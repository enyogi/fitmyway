import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { ActivitychoosePage } from '../pages/activity/chooser/activitychoose';
import { UserComponent } from '../components/user/user.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  ngOnInit(): void {
    this.user.LoadUser();
  }
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private user: UserComponent) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
        { 
          title: 'Home',
          component: HomePage 
        },
        { 
          title: 'History', 
          component: HistoryPage 
        },
        { 
          title: 'Activity Chooser', 
          component: ActivitychoosePage 
        },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
