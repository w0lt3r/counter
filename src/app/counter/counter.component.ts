import { Component, OnInit } from '@angular/core';
import {CounterSyncService} from "../shared/counter-sync.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {
  count: number = 0;
  disableIncreaser: boolean = false;
  disableDecreaser: boolean = true;
  constructor(private counterSync: CounterSyncService) {
  }

  ngOnInit(): void {
    this.setInitalState();
    this.counterSync.accumulator.subscribe(
      value => {
        if(value === 0){
          this.disableDecreaser = true;
        }else if(value === 20){
          this.disableIncreaser = true;
        }else{
          this.disableDecreaser = false;
          this.disableIncreaser = false;
        }
      }
    )

    this.counterSync.resetEmitter.subscribe(
      reset => {
        if(reset){
          this.setInitalState();
        }
      }
    )
  }

  onIncrease(){
    this.count++;
    this.counterSync.increase();
  }

  onDecrease(){
    this.count--;
    this.counterSync.decrease();
  }

  setInitalState(){
    this.disableIncreaser = false;
    this.disableDecreaser = true;
    this.count = 0;
  }
}
