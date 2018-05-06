import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EndpointapiComponent } from '../../../components/endpointapi/endpointapi';

@Component({
  selector: 'activity-finish',
  templateUrl: 'activity-finish.component.html'
})
export class ActivityFinishPage implements OnInit  {
    ngOnInit(): void {
        this.endpointApi.PublishActivity(1).subscribe(() => {

        });
    }
    constructor(      
        public navCtrl: NavController, 
        public navParams: NavParams,
        private endpointApi: EndpointapiComponent
  ) {

  }

  continue() {
      this.navCtrl.pop();
  }

}