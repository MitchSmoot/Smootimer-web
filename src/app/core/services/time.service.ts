import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Solve } from 'src/app/shared/models/solve.model';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  solves: Observable<any[]>;

  constructor( private db: AngularFirestore) {
    this.solves = db.collection('solves').valueChanges();
  }

  getSolves() {
    return this.db.collection('solves', ref => ref.orderBy('solveDate', 'desc').limit(25)).snapshotChanges();
  }

  addSolve(solve: Solve) {
    this.db.collection('solves').add(solve);
  }

  updateSolve(solve: Solve) {
    this.db.doc('solves/' + solve.id).update(solve);
  }

  deleteSolve(solveId: string) {
    this.db.doc('solves/' + solveId).delete();
  }

}
