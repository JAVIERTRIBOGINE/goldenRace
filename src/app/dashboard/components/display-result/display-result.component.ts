import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as constants from 'src/app/core/config/const';
import { SelectionService } from 'src/app/core/services/selection.service';
import { BallSelectionComponent } from '../ball-selection/ball-selection.component';
@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.scss']
})
export class DisplayResultComponent implements OnInit {
  @ViewChild("ballSelection", {static: false}) ballSelection: BallSelectionComponent;
  @Input() panel = false;
  // colors: string[]= constants.colors;
  randomNumber$: Observable<number>;
  amount$: Observable<number>;
  selectedNumbers$: Observable<number[]>;
  selectedNumbers: number[]=[];
  success: boolean = false;
  betNumber: number = 0;
  loaded: boolean = false;
  amount: number = 0;
  @Output()changePanel: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private selectionService: SelectionService, private router: Router) { 
    this.ballSelection = new BallSelectionComponent(this.selectionService);
    this.randomNumber$ = this.selectionService.sendRandomNumber();
    this.amount$ = this.selectionService.sendAmount();
    this.selectedNumbers$ = this.selectionService.updateSelection();
    this.randomNumber$.subscribe(data=>{
      this.betNumber = data;
      if (this.selectedNumbers.includes(this.betNumber)) {this.success = true;}
      this.loaded = true; 
    });
    this.selectedNumbers$.subscribe(array => this.selectedNumbers = array);
    this.amount$.subscribe(quantity => this.amount = quantity );
  }

  ngOnInit() {
  }

  home(){
    console.log("selected numbers: ", this.selectedNumbers);
    // this.initializeValues();
    location.reload();
    // this.router.navigate(['/dashboard']);
  }

  initializeValues() {
    this.selectedNumbers = [];
    this.amount = 0;
    this.selectionService.selection = [];
    this.ballSelection.toggle = this.ballSelection.toggle = constants.toggle;
    // this.ballSelection.toggle = constants.toggle;
    this.changePanel.emit(true);
  }

}
