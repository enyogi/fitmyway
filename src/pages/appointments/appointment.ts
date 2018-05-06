import { Component, OnInit } from '@angular/core';
import { EndpointapiComponent } from '../../components/endpointapi/endpointapi';
import { Appointment } from '../../components/appointment/appointment';

@Component({
    selector: 'profile-appointment',
    templateUrl: 'appointment.html'
})
export class AppointmentsPage implements OnInit {
    appointments: Appointment[];

    appointment1 = new Appointment();
    appointment2 = new Appointment();
    ngOnInit(): void {
        this.endpointApi.LoadAppointments(1).subscribe((response: Appointment) => {
            this.appointments = new Array<Appointment>();
            this.appointments.push(response);
        });
        this.appointment1.date = "05 Jan, 2018"
        this.appointment1.starttime = "12:30 PM"
        this.appointment2.date = "11 Sep, 2017"
        this.appointment2.starttime = "03:45 PM"
    }

    constructor(private endpointApi: EndpointapiComponent) {

    }
}
