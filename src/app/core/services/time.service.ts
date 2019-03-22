import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  solves: Observable<any[]>;

  constructor( db: AngularFirestore) {
    this.solves = db.collection('solves').valueChanges();
  }

}
