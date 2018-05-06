import { Component, OnInit } from "@angular/core";

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

    ngOnInit(): void {
        this._startTime = new Date();
        this._finishTime.setTime(this._startTime.getTime() + ((60 * 1000) * 5));
        this.updateClock();
    }
    pad(num, size) { 
        return ('000000000' + num).substr(-size); 
    }

    updateClock() {
        var distance = this._finishTime.getTime() - this._startTime.getTime();

        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if ((this.minutes<=0) && (this.seconds <= 0)) {
            clearInterval(this.timerId);
        }
    }
    startActivity() {
        this._startTime = new Date();
        this._finishTime.setTime(this._startTime.getTime() + ((60 * 1000) * 5));

        this.timerId = setInterval(() => {
            this._startTime = new Date();
            this.updateClock();
        }, 500);
    }
}

  