import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  solves: Observable<any[]>;

  constructor(
    db: AngularFirestore,
    private authService: AuthenticationService
    ) {
    this.solves = db.collection('solves').valueChanges();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
