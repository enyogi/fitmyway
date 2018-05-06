import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'doctor-item',
  templateUrl: 'doctor-item.component.html'
})
export class DoctorItemPage {
@Input() id: number;
@Input() firstName: string;
@Input() lastName: string;
@Input() title: string;
@Input() isDoctor: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

}
