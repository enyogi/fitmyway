import { Injectable } from '@angular/core';
import { User } from '../user/user';

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
}
