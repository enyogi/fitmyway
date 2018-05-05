import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { Activity } from '../activity/activity';

/**
 * Generated class for the EndpointapiComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Injectable()
export class EndpointapiComponent {

  constructor() {
    console.log('Hello EndpointapiComponent Component');
  }

  GetUser(): User {
    const user = new User();
    user.Name = "Loren Koss";
    return user;
  }

  LoadActivities(userId: Number): Activity[] {
    const returnArray = new Array<Activity>();

    returnArray.push({
      Id: 1,
      Description: "Activity 1",
      Difficulty: 5,
      ImageUrl: "url",
      Name: "Ativity 1"
    });
    returnArray.push({
      Id: 2,
      Description: "Activity 2",
      Difficulty: 5,
      ImageUrl: "url",
      Name: "Ativity 2"
    });
    returnArray.push({
      Id: 3,
      Description: "Activity 3",
      Difficulty: 5,
      ImageUrl: "url",
      Name: "Ativity 3"
    });
    return returnArray;
  }
}
