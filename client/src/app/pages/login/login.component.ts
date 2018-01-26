import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserDataService } from '../../providers/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginInfo = {
    email: '',
    password: ''
  };
  loginfailed = false;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public userData: UserDataService,
  ) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {

    // this.submitted = true;
    // this.loginfailederror = '';
    // this.unverified = false;
    this.loginfailed = false;

    if (!form.valid) {
      //alert('Please input fields!');
      this.loginfailed = true;
      return;
    }

    // this.auth.post( 'login', {
    //   'email' : this.login.username, 
    //   'password' : this.login.password
    // }).then( (data : any) => {
    //     console.log("received data: ", data);
    //     this.userData.setToken(data.data.token);
    //     this.userData.setUser(data.data.user);
    //     this.navCtrl.push(TabsPage);
    // }).catch(this.failedLogin.bind(this));

    this.userData.setLoggedIn(this.loginInfo);

    this.router.navigate(['/list']);

  }

}
