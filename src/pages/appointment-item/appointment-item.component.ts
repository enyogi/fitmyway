import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Appointment } from '../../components/appointment/appointment';
import { EndpointapiComponent } from '../../components/endpointapi/endpointapi';

@Component({
  selector: 'appointment-item',
  templateUrl: 'appointment-item.html'
})
export class AppointmentItemPage {
@Input() appointment: Appointment;
@Input() name: string;
@Input() canSubmit: string;

hasSubmitted = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, private endpointApi: EndpointapiComponent) {
    
    }
    
    sendData() { 
        this.endpointApi.PublishActivity(1).subscribe(() => {
            this.hasSubmitted = true;

        });
    }

}
