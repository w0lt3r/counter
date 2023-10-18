import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterSyncService {
  totalValue : number = 0;
  accumulator = new Subject<number>();
  resetEmitter = new Subject<boolean>();
  constructor() {
  }

  increase(){
    this.totalValue++;
    this.accumulator.next(this.totalValue);
  }

  decrease(){
    this.totalValue--;
    this.accumulator.next(this.totalValue);
  }

  reset(){
    this.totalValue = 0;
    this.accumulator.next(this.totalValue);
    this.resetEmitter.next(true);
  }
}
