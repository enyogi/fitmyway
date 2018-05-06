import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'friends',
  templateUrl: 'friends.html'
})
export class FriendsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
}
