import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'doctor-page',
  templateUrl: 'doctor.html'
})
export class DoctorPage {


    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

}
