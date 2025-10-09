import { Injectable, signal, WritableSignal } from '@angular/core';

export interface Solve {
    id?: string;
    event: string;
    time: number;
    solveDate: Date;
    penalty?: number;
    scramble?: string;
    comment?: string;
}


@Injectable({
  providedIn: 'root'
})
export class TimerService {

  solves: WritableSignal<Solve[]> = signal<Solve[]>([]);

  getTimes() {
    console.log('getTimes');
  }
 
  addSolve(solve: Solve) {
    solve.id = crypto.randomUUID();
    this.solves.update(list => [...list, solve]);
    console.log(this.solves);
  }

  addSolves(solves: Solve[]) {
    for (const solve of solves) {
      solve.id = crypto.randomUUID();
    }
    this.solves.update(list => [...list, ...solves]);
    this.solves.update(list => list.sort((a, b) => a.solveDate.getTime() - b.solveDate.getTime()));
    console.log(this.solves);
  }

  deleteSolve(id: string) {
    this.solves.update(list => list.filter(s => s.id !== id));
  }

  updateSolve(solve: Solve) {
    this.solves.update(list => list.map(s => s.id === solve.id ? solve : s));
  }
}
