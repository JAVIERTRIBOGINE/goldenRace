import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../core/services/selection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  active = 1;
  firstPanel: boolean = true;
  constructor(private selectionService: SelectionService) { }
  definiteBettingNumbers: number[] = [];

  ngOnInit() {
  }

  changePanel(change:boolean) {
    this.firstPanel = change;
  }

  // get firstPanel() {
  //   return this.definiteBettingNumbers.length === 0;
  // }

}
