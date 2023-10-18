import { Component, OnInit } from '@angular/core';
import {CounterSyncService} from "../shared/counter-sync.service";

@Component({
  selector: 'app-counter-viewer',
  templateUrl: './counter-viewer.component.html',
  styleUrls: ['./counter-viewer.component.sass']
})
export class CounterViewerComponent implements OnInit {
  totalValue: number = 0;
  constructor(private counterSync: CounterSyncService) { }

  ngOnInit(): void {
    this.counterSync.accumulator.subscribe(
      value => {
        this.totalValue = value;
      }
    )
  }

  onReset(){
    this.counterSync.reset();
  }
}
