import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  selection$: Subject<number[]> = new Subject<number[]>();
  random$: Subject<number> = new Subject<number>();
  amount$: Subject<number> = new Subject<number>();
  constructor() { }
  selection: number[]=[];

  public addSelection(selNumber:number) {
    if (!this.selection.includes(selNumber)){
      this.selection.push(selNumber);
    }else {
    this.selection = this.removeNumberFromArray(selNumber);
    }
    this.selection$.next(this.selection);
  }

  removeNumberFromArray(number: number) {

    return this.selection.filter(val=>val !== number);
  }

  public updateSelection() {
    return this.selection$.asObservable();
  }

  public setRandomNumber(){
    const rand = (Math.floor(Math.random()*10))+1;
    this.random$.next(rand);
  }

  public setAmount(amount: number) {
    this.amount$.next(amount);
  }

  public sendAmount() {
    return this.amount$.asObservable();
  }

  public sendRandomNumber(){
    return this.random$.asObservable();
  }

  public testing() {
    return "testing";
  }
}
