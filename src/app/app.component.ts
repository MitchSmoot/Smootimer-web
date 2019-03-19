import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(
    db: AngularFirestore,
    public fireAuth:AngularFireAuth
    ) {
    this.items = db.collection('items').valueChanges();
  }
  title = 'smootimer-web';

  login() {
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.fireAuth.auth.signOut();
  }
}
