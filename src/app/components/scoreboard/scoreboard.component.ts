import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  @Input() fixtureSelected: number = 3;
  @Output() fselected = new EventEmitter<number>();
  @Output() calculateF = new EventEmitter<number>();
  @Input() fixture_1: any;
  @Input() fixture_2: any;
  @Input() fixture_3: any;
  @Input() fixture_4: any;
  @Input() fixture_5: any;
  @Input() fixture_6: any;
  @Input() fixture_7: any;
  @Input() fixture_8: any;
  @Input() fixture_9: any;
  @Input() fixture_10: any;
  @Input() fixture_11: any;
  @Input() fixture_12: any;
  @Input() fixture_13: any;
  @Input() fixture_14: any;
  @Input() fixture_15: any;
  @Input() fixture_16: any;
  @Input() fixture_17: any;
  @Input() fixture_18: any;
  
  ngOnInit(): void {
  }

  public deleteValues(fixture: number){
    switch(fixture){
      case 1:
        this.fixture_1.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 2:
        this.fixture_2.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 3:
        this.fixture_3.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 4:
        this.fixture_4.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 5:
        this.fixture_5.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 6:
        this.fixture_6.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 7:
        this.fixture_7.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 8:
        this.fixture_8.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 9:
        this.fixture_9.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 10:
        this.fixture_10.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 11:
        this.fixture_11.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 12:
        this.fixture_12.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 13:
        this.fixture_13.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 14:
        this.fixture_14.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 15:
        this.fixture_15.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 16:
        this.fixture_16.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 17:
        this.fixture_17.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
      case 18:
        this.fixture_18.forEach((element: any) => {
          element.golLocal = null;
          element.golVisitor = null;
        });
        break;
    }

  }

  public selection(fixture: number){ 
    this.fixtureSelected = fixture;
    this.fselected.emit(fixture)
  }

  public calculate(fixture: number){
    this.calculateF.emit(fixture);
  }

}
