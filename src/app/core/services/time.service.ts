import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Solve } from 'src/app/shared/models/solve.model';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  solves: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.solves = db.collection('solves').valueChanges();
  }

  getSolves(amount: number = 25) {
    return this.db.collection('solves', ref => ref.orderBy('solveDate', 'desc').limit(amount)).snapshotChanges();
  }

  getSolvesFiltered(eventName: string = '3x3', amount: number = 25) {
    return this.db.collection('solves', ref => ref.where('event', '==', eventName).orderBy('solveDate', 'desc').limit(amount)).snapshotChanges();
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
