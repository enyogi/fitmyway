import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'friend-item',
  templateUrl: 'friend-item.html'
})
export class FriendItemPage {
@Input() name;
@Input() count;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
}
