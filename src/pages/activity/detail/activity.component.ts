import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ActivityFinishPage } from "../finish/activity-finish.component";
import { EndpointapiComponent } from "../../../components/endpointapi/endpointapi";

@Component({
    selector: 'page-activity-start',
    templateUrl: 'activity.html',
})
export class ActivityDetailPage implements OnInit {
    _startTime: Date;
    _finishTime: Date= new Date();
    minutes: number;
    seconds: number;
    timerId: number;
    hasStarted: boolean = false;

    ngOnInit(): void {
        this._startTime = new Date();
        this._finishTime = this._startTime;
        this.updateClock();
    }
    constructor(      
        public navCtrl: NavController, 
        public navParams: NavParams,
        public endpointApi: EndpointapiComponent
  ) {

  }
    pad(num, size) { 
        return ('000000000' + num).substr(-size); 
    }

    updateClock() {
        var distance = new Date().getTime() - this._startTime.getTime();

        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
    endActivity() {
        clearInterval(this.timerId);
        let currentIndex = this.navCtrl.getActive().index;
        this.navCtrl.push(ActivityFinishPage).then(() => {
            this.navCtrl.remove(currentIndex);
            this.endpointApi.StopActivity(1, 1);
            this.hasStarted = false;
        });
    }
    startActivity() {
        this._startTime = new Date();
        //this._finishTime.setTime(this._startTime.getTime() + ((60 * 1000) * 5));
        this.endpointApi.StartActivity(1, 1);
        this.hasStarted = true;
        this.timerId = setInterval(() => {
            this.updateClock();
        }, 500);
    }
}

  