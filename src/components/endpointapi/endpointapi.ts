import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EndpointapiComponent {

  apiHost: string = "https://testfit.azurewebsites.net/"
  constructor(private httpClient: HttpClient) {
    console.log('Hello EndpointapiComponent Component');
  }

  GetUser(): User {
    const user = new User();
    user.Name = "Loren Koss";
    user.Id = 1;
    user.Doctor = "Dr. Jay Patel";
    return user;
  }

  LoadActivities(userId: Number): Observable<Object> {

    return this.httpClient.get(this.apiHost+"api/user/"+userId+"/activity");

  }
  PublishActivity(userId: number) {
    return this.httpClient.post(this.apiHost+"api/athena/publish/user/"+userId,
        {
        });
  }

  StartActivity(userId: number, activityId: number) {
    return this.httpClient.post(this.apiHost+"api/fitbit/user/"+userId+"/activity/"+activityId+"/start",
        {
        });
  }
  StopActivity(userId: number, activityId: number) {
    return this.httpClient.post(this.apiHost+"api/fitbit/user/"+userId+"/activity/"+activityId+"/end",
        {
        });
  }
}
