import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Date } from '../scoreboard/calendar';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit, OnChanges{

  @Input() fSelected = 1;


  ngOnInit(): void {
    this.fixtureSelected(this.fSelected);
  }

  ngOnChanges() {
    this.fixtureSelected(this.fSelected);
  }

  @Output() fixtureS = new EventEmitter<number>();
  public btn1 = '';
  public btn2 = '';
  public btn3 = '';
  public btn4 = '';
  public btn5 = '';
  public btn6 = '';
  public btn7 = '';
  public btn8 = '';
  public btn9 = '';
  public btn10 = '';
  public btn11 = '';
  public btn12 = '';
  public btn13 = '';
  public btn14 = '';
  public btn15 = '';
  public btn16 = '';
  public btn17 = '';
  public btn18 = '';

  public fixtureSelected(fixture: number){
    this.fixtureS.emit(fixture);
    if(fixture === 1){
      this.btn1 = 'btnOn';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 2){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOn';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 3){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOn';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 4){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOn';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 5){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOn';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 6){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOn';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 7){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOn';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 8){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOn';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 9){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOn';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 10){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOn';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 11){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOn';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 12){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOn';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 13){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOn';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 14){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOn';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 15){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOn';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 16){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOn';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOff';
    }

    if(fixture === 17){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOn';
      this.btn18 = 'btnOff';
    }

    if(fixture === 18){
      this.btn1 = 'btnOff';
      this.btn2 = 'btnOff';
      this.btn3 = 'btnOff';
      this.btn4 = 'btnOff';
      this.btn5 = 'btnOff';
      this.btn6 = 'btnOff';
      this.btn7 = 'btnOff';
      this.btn8 = 'btnOff';
      this.btn9 = 'btnOff';
      this.btn10 = 'btnOff';
      this.btn11 = 'btnOff';
      this.btn12 = 'btnOff';
      this.btn13 = 'btnOff';
      this.btn14 = 'btnOff';
      this.btn15 = 'btnOff';
      this.btn16 = 'btnOff';
      this.btn17 = 'btnOff';
      this.btn18 = 'btnOn';
    }
  }

}
