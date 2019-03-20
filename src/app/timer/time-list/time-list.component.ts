import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'time-list',
    templateUrl: 'time-list.component.html'
})
export class TimeListComponent {
  solves: Observable<any[]>
  constructor(
    db: AngularFirestore
  ) {
    this.solves = db.collection('solves').valueChanges();
  }
}