import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectionService } from 'src/app/core/services/selection.service';
import { Observable } from 'rxjs';
import * as constants from 'src/app/core/config/const';

@Component({
  selector: 'app-input-bet',
  templateUrl: './input-bet.component.html',
  styleUrls: ['./input-bet.component.scss']
})
export class InputBetComponent implements OnInit {
  colored = constants.colors;
  // colors: string[] = constants.colors;
  selectedNumbers$: Observable<number[]> | undefined;
  randomNumber$: Observable<number> | undefined;
  selectedBettingNumbers: number[]=[];
  validateBet: boolean = false;
  amount: number = 1;
  betNumber: number = 0;
  totalToBet: number = this.amount * this.selectedBettingNumbers.length;
  resultPanel: boolean = false;
  @Output() changePanel: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public selectionService: SelectionService) {
    // this.selectedNumbers$ = new Observable<number[]>();
    this.selectedNumbers$ = this.selectionService.updateSelection();
    this.selectedNumbers$.subscribe(result=> this.selectedBettingNumbers = result);
    
   }
    

  ngOnInit() {
    
  }
  
  validate(){
    this.validateBet = !this.validateBet;
    
  }
  
  whichAmount(){
    console.log("amount :"+this.amount  + " total : " + this.totalToBet);
    this.totalToBet = this.amount * this.selectedBettingNumbers.length;

  }
  updateSelection() {
  }

  get lower() {
    return this.amount < 5;
  }

  bet() {
    this.validateBet = false;
    this.changePanel.emit(false);
    this.selectionService.setRandomNumber();
    this.selectionService.setAmount(this.totalToBet);
  }

  
}
