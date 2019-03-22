import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class ApplicationNavComponent implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public fireAuth: AngularFireAuth
  ) {

  }

  ngOnInit() {
    console.log(this.fireAuth.user);
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
