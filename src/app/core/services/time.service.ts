import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  solves: Observable<any[]>;

  constructor( private db: AngularFirestore) {
    this.solves = db.collection('solves').valueChanges();
  }

  addSolve(solve: any): any {
    this.db.collection('solves').add({
      time: solve.time,
    });
  }

  deleteSolve(id) {
    this.db.collection('solves').doc(id).delete();
  }

}
