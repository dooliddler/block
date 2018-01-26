import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserDataService } from './providers/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    public userData: UserDataService,
    public router: Router,
  ) { }

  SignOut() {
    this.userData.logOut();
    this.router.navigate(['/home']);
  }
}
