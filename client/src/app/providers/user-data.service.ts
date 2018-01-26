import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDataService {

  private isLogined = false;

  constructor() { }

  public hasLoggedIn() {
    return this.isLogined;
  }

  public setLoggedIn(data) {
    this.isLogined = true;
  }

  public logOut() {
    this.isLogined = false;
  }

}
