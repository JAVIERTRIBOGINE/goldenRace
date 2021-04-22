import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectionService } from 'src/app/core/services/selection.service';
import * as constants from 'src/app/core/config/const';

@Component({
  selector: 'app-ball-selection',
  templateUrl: './ball-selection.component.html',
  styleUrls: ['./ball-selection.component.scss']
})
export class BallSelectionComponent implements OnInit {
    @Input() panel = false;
    colors: string[] = constants.colors; 
    public toggle: boolean[] = constants.toggle;
    balls: number[]= constants.balls;
    selectedNumbers$: Observable<number[]>;
    selectedNumbers: number[]=[];
    constructor(private selectionService: SelectionService) {
      this.selectedNumbers$ = new Observable<number[]>();
      this.selectedNumbers$ = this.selectionService.updateSelection();
      this.selectedNumbers$.subscribe(result=> this.selectedNumbers = result);
     }

  ngOnInit() {
  }

  selectNumber(value:number) {
    console.log("pulsa: ", this.toggle);
    this.toggle[(value)-1]=!this.toggle[(value)-1];
    
    this.selectionService.addSelection(value);
  }
}
