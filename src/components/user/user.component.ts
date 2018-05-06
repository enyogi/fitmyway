import { Injectable } from '@angular/core';
import { EndpointapiComponent } from '../endpointapi/endpointapi';
import { User } from './user';

@Injectable()
export class UserComponent {

  public Name: string = 'Test';
  private _user: User;
  
  constructor(private endpointApi: EndpointapiComponent) {
    console.log('Hello UserComponent Component');
  }
  LoadUser() {
    this._user = this.endpointApi.GetUser();
  }

  CurrentUser() {
    return this._user;
  }
}
