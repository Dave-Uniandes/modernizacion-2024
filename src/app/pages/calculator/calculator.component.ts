import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit{
  public fixtureS = 1;
  public fSelected = 3;
  public data = 'data';
  public darkModeBool = false;

  public fixture_1 = [
    {
      idMatch: 1,
      idLocal: 9,
      idVisitor: 4,
      golLocal: 3,
      golVisitor: 1,
    },
    {
      idMatch: 2,
      idLocal: 5,
      idVisitor: 10,
      golLocal: 1,
      golVisitor: 0,
    },
    {
      idMatch: 3,
      idLocal: 3,
      idVisitor: 2,
      golLocal: 5,
      golVisitor: 1,
    },
    {
      idMatch: 4,
      idLocal: 7,
      idVisitor: 8,
      golLocal: 0,
      golVisitor: 0,
    },
    {
      idMatch: 5,
      idLocal: 1,
      idVisitor: 6,
      golLocal: 1,
      golVisitor: 0,
    },
  ];

  public fixture_2 = [
    {
      idMatch: 1,
      idLocal: 8,
      idVisitor: 3,
      golLocal: 0,
      golVisitor: 1,
    },
    {
      idMatch: 2,
      idLocal: 10,
      idVisitor: 7,
      golLocal: 1,
      golVisitor: 0,
    },
    {
      idMatch: 3,
      idLocal: 2,
      idVisitor: 1,
      golLocal: 0,
      golVisitor: 3,
    },
    {
      idMatch: 4,
      idLocal: 4,
      idVisitor: 5,
      golLocal: 0,
      golVisitor: 0,
    },
    {
      idMatch: 5,
      idLocal: 6,
      idVisitor: 9,
      golLocal: 2,
      golVisitor: 1,
    },
  ];

  public fixture_3 = [
    {
      idMatch: 1,
      idLocal: 5,
      idVisitor: 9,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 3,
      idVisitor: 10,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 2,
      idVisitor: 6,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 1,
      idVisitor: 7,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 4,
      idVisitor: 8,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_4 = [
    {
      idMatch: 1,
      idLocal: 9,
      idVisitor: 3,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 8,
      idVisitor: 1,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 10,
      idVisitor: 4,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 7,
      idVisitor: 2,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 6,
      idVisitor: 5,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_5 = [
    {
      idMatch: 1,
      idLocal: 5,
      idVisitor: 3,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 10,
      idVisitor: 6,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 2,
      idVisitor: 8,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 1,
      idVisitor: 9,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 4,
      idVisitor: 7,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_6 = [
    {
      idMatch: 1,
      idLocal: 9,
      idVisitor: 2,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 8,
      idVisitor: 10,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 3,
      idVisitor: 1,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 7,
      idVisitor: 5,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 6,
      idVisitor: 4,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_7 = [
    {
      idMatch: 1,
      idLocal: 9,
      idVisitor: 7,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 8,
      idVisitor: 5,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 3,
      idVisitor: 6,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 2,
      idVisitor: 10,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 1,
      idVisitor: 4,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_8 = [
    {
      idMatch: 1,
      idLocal: 5,
      idVisitor: 1,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 10,
      idVisitor: 9,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 7,
      idVisitor: 3,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 4,
      idVisitor: 2,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 6,
      idVisitor: 8,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_9 = [
    {
      idMatch: 1,
      idLocal: 8,
      idVisitor: 9,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 10,
      idVisitor: 1,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 2,
      idVisitor: 5,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 4,
      idVisitor: 3,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 6,
      idVisitor: 7,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_10 = [
    {
      idMatch: 1,
      idLocal: 9,
      idVisitor: 6,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 5,
      idVisitor: 4,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 3,
      idVisitor: 8,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 7,
      idVisitor: 10,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 1,
      idVisitor: 2,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_11 = [
    {
      idMatch: 1,
      idLocal: 9,
      idVisitor: 5,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 8,
      idVisitor: 4,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 10,
      idVisitor: 3,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 7,
      idVisitor: 1,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 6,
      idVisitor: 2,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_12 = [
    {
      idMatch: 1,
      idLocal: 5,
      idVisitor: 6,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 3,
      idVisitor: 9,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 2,
      idVisitor: 7,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 1,
      idVisitor: 8,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 4,
      idVisitor: 10,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_13 = [
    {
      idMatch: 1,
      idLocal: 9,
      idVisitor: 1,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 8,
      idVisitor: 2,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 3,
      idVisitor: 5,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 7,
      idVisitor: 4,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 6,
      idVisitor: 10,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_14 = [
    {
      idMatch: 1,
      idLocal: 5,
      idVisitor: 7,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 10,
      idVisitor: 8,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 2,
      idVisitor: 9,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 1,
      idVisitor: 3,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 4,
      idVisitor: 6,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_15 = [
    {
      idMatch: 1,
      idLocal: 5,
      idVisitor: 8,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 10,
      idVisitor: 2,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 7,
      idVisitor: 9,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 4,
      idVisitor: 1,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 6,
      idVisitor: 3,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_16 = [
    {
      idMatch: 1,
      idLocal: 9,
      idVisitor: 10,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 8,
      idVisitor: 6,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 3,
      idVisitor: 7,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 2,
      idVisitor: 4,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 1,
      idVisitor: 5,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_17 = [
    {
      idMatch: 1,
      idLocal: 9,
      idVisitor: 8,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 5,
      idVisitor: 2,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 3,
      idVisitor: 4,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 7,
      idVisitor: 6,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 1,
      idVisitor: 10,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_18 = [
    {
      idMatch: 1,
      idLocal: 8,
      idVisitor: 7,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 2,
      idLocal: 10,
      idVisitor: 5,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 3,
      idLocal: 2,
      idVisitor: 3,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 4,
      idLocal: 4,
      idVisitor: 9,
      golLocal: null,
      golVisitor: null,
    },
    {
      idMatch: 5,
      idLocal: 6,
      idVisitor: 1,
      golLocal: null,
      golVisitor: null,
    },
  ];

  public fixture_1_calculated = false;
  public fixture_2_calculated = false;
  public fixture_3_calculated = false;
  public fixture_4_calculated = false;
  public fixture_5_calculated = false;
  public fixture_6_calculated = false;
  public fixture_7_calculated = false;
  public fixture_8_calculated = false;
  public fixture_9_calculated = false;
  public fixture_10_calculated = false;
  public fixture_11_calculated = false;
  public fixture_12_calculated = false;
  public fixture_13_calculated = false;
  public fixture_14_calculated = false;
  public fixture_15_calculated = false;
  public fixture_16_calculated = false;
  public fixture_17_calculated = false;
  public fixture_18_calculated = false;

  public ngOnInit(): void {
    this.calculate(1)
    this.calculate(2)
    this.dataSource.sort(this.sortData)
  }

  public fixtureSelected(fixture: number) {
    this.fixtureS = fixture;
  }

  public fselected(fixture: number) {
    this.fSelected = fixture;
  }

  public calculate(fixture: number) {
    switch (fixture) {
      case 1:
        this.fixture_1.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_1.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_1.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_1.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 2:
        this.fixture_2.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_2.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_2.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_2.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 3:
        this.fixture_3.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_3.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_3.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_3.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 4:
        this.fixture_4.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_4.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_4.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_4.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 5:
        this.fixture_5.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_5.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_5.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_5.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 6:
        this.fixture_6.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_6.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_6.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_6.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 7:
        this.fixture_7.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_7.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_7.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_7.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 8:
        this.fixture_8.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_8.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_8.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_8.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 9:
        this.fixture_9.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_9.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_9.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_9.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 10:
        this.fixture_10.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_10.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_10.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_10.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 11:
        this.fixture_11.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_11.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_11.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_11.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 12:
        this.fixture_12.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_12.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_12.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_12.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 13:
        this.fixture_13.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_13.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_13.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_13.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 14:
        this.fixture_14.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_14.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_14.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_14.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 15:
        this.fixture_15.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_15.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_15.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_15.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 16:
        this.fixture_16.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_16.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_16.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_16.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 17:
        this.fixture_17.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_17.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_17.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_17.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
      case 18:
        this.fixture_18.forEach((element: any) => {
          element.golVisitor = element.golVisitor === null ? 0 : element.golVisitor;
          element.golLocal = element.golLocal === null ? 0 : element.golLocal;
          if(element.golLocal > element.golVisitor){
            this.dataSource_18.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 3;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 0;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
            });
          }
          if(element.golLocal < element.golVisitor){
            this.dataSource_18.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 0;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = element.golLocal - element.golVisitor;
                country.played = 1;
                country.won = 0;
                country.drawn = 0;
                country.lost = 1;
              }
              if(element.idVisitor === country.id){
                country.points = 3;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = element.golVisitor - element.golLocal;
                country.played = 1;
                country.won = 1;
                country.drawn = 0;
                country.lost = 0;
              }
            });
          }
          if(element.golLocal === element.golVisitor){
            this.dataSource_18.forEach((country) => {
              if(element.idLocal === country.id){
                country.points = 1;
                country.gf = element.golLocal;
                country.ga = element.golVisitor;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
              if(element.idVisitor === country.id){
                country.points = 1;
                country.gf = element.golVisitor;
                country.ga = element.golLocal;
                country.gd = 0;
                country.played = 1;
                country.won = 0;
                country.drawn = 1;
                country.lost = 0;
              }
            });
          }
        });
        break;
    }
    this.summation();
    this.dataSource.sort(this.sortData)
  }

  public dataSource = [
    {
      id: 1,
      flag: 'assets/flags/argentina.png',
      country: 'Argentina',
      played: 2,
      won: 2,
      drawn: 0,
      lost: 0,
      gf: 4,
      ga: 0,
      gd: 4,
      points: 6,
      class: '',
    },
    {
      id: 2,
      flag: 'assets/flags/bolivia.png',
      country: 'Bolivia',
      played: 2,
      won: 0,
      drawn: 0,
      lost: 2,
      gf: 1,
      ga: 8,
      gd: -7,
      points: 0,
      class: '',
    },
    {
      id: 3,
      flag: 'assets/flags/brasil.png',
      country: 'Brasil',
      played: 2,
      won: 2,
      drawn: 0,
      lost: 0,
      gf: 6,
      ga: 1,
      gd: 5,
      points: 6,
      class: '',
    },
    {
      id: 4,
      flag: 'assets/flags/chile.png',
      country: 'Chile',
      played: 2,
      won: 0,
      drawn: 1,
      lost: 1,
      gf: 1,
      ga: 3,
      gd: -2,
      points: 1,
      class: '',
    },
    {
      id: 5,
      flag: 'assets/flags/colombia.png',
      country: 'Colombia',
      played: 2,
      won: 1,
      drawn: 1,
      lost: 0,
      gf: 1,
      ga: 0,
      gd: 1,
      points: 4,
      class: '',
    },
    {
      id: 6,
      flag: 'assets/flags/ecuador.png',
      country: 'Ecuador',
      played: 2,
      won: 1,
      drawn: 0,
      lost: 1,
      gf: 2,
      ga: 2,
      gd: 0,
      points: 0,
      class: '',
    },
    {
      id: 7,
      flag: 'assets/flags/paraguay.png',
      country: 'Paraguay',
      played: 2,
      won: 0,
      drawn: 1,
      lost: 1,
      gf: 0,
      ga: 1,
      gd: -1,
      points: 1,
      class: '',
    },
    {
      id: 8,
      flag: 'assets/flags/peru.png',
      country: 'Perú',
      played: 2,
      won: 0,
      drawn: 1,
      lost: 1,
      gf: 0,
      ga: 1,
      gd: -1,
      points: 1,
      class: '',
    },
    {
      id: 9,
      flag: 'assets/flags/uruguay.png',
      country: 'Uruguay',
      played: 2,
      won: 1,
      drawn: 0,
      lost: 1,
      gf: 4,
      ga: 3,
      gd: 1,
      points: 3,
      class: '',
    },
    {
      id: 10,
      flag: 'assets/flags/venezuela.png',
      country: 'Venezuela',
      played: 2,
      won: 1,
      drawn: 0,
      lost: 1,
      gf: 1,
      ga: 1,
      gd: 0,
      points: 3,
      class: '',
    },
  ];

  

  public dataSource_1: any[] = [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_2: any[]= [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_3: any[] = [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_4: any[]= [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_5: any[] = [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_6: any[]= [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_7: any[] = [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_8: any[]= [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_9: any[]= [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_10: any[] = [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_11: any[]= [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_12: any[] = [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_13: any[]= [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_14: any[] = [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_15: any[]= [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_16: any[] = [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_17: any[]= [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public dataSource_18: any[]= [
    {
      id: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 2,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 3,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 4,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 5,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 6,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 7,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 8,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 9,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
    {
      id: 10,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    },
  ];

  public colombia = {
    
  }

  public reorderDataSource(){
    this.dataSource = this.dataSource.sort((p1: any, p2: any) => (p1.points < p2.points) ? 1 : (p1.points > p2.points) ? -1 : 0);
  }

  public sortData(a: any, b: any) {
    if (a.points !== b.points) {
      return b.points - a.points;
    }
    if (a.gd !== b.gd) {
      return b.gd - a.gd;
    }
    if (a.gf !== b.gf) {
      return b.gf - a.gf;
    }
    if (a.ga !== b.ga) {
      return a.ga - b.ga;
    }
    return a.country.localeCompare(b.country);
  }

  public summation() {
    this.dataSource.forEach((element:any) => {
      const idCountry = element.id;
      const equatorPoints = idCountry === 6 ? -3 : 0;
      element.played = this.dataSource_1.find((element: any) => element?.id === idCountry)?.played +
                      this.dataSource_2.find((element: any) => element.id === idCountry)?.played +
                      this.dataSource_3.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_4.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_5.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_6.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_7.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_8.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_9.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_10.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_11.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_12.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_13.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_14.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_15.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_16.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_17.find((element: any) => element.id === idCountry)?.played + 
                      this.dataSource_18.find((element: any) => element.id === idCountry)?.played;

      element.won = this.dataSource_1.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_2.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_3.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_4.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_5.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_6.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_7.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_8.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_9.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_10.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_11.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_12.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_13.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_14.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_15.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_16.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_17.find((element: any) => element.id === idCountry)?.won + 
                    this.dataSource_18.find((element: any) => element.id === idCountry)?.won;

      element.drawn = this.dataSource_1.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_2.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_3.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_4.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_5.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_6.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_7.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_8.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_9.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_10.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_11.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_12.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_13.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_14.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_15.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_16.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_17.find((element: any) => element.id === idCountry)?.drawn + 
                      this.dataSource_18.find((element: any) => element.id === idCountry)?.drawn;

      element.lost = this.dataSource_1.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_2.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_3.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_4.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_5.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_6.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_7.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_8.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_9.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_10.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_11.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_12.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_13.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_14.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_15.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_16.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_17.find((element: any) => element.id === idCountry)?.lost + 
                      this.dataSource_18.find((element: any) => element.id === idCountry)?.lost;
      
      element.gf = this.dataSource_1.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_2.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_3.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_4.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_5.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_6.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_7.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_8.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_9.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_10.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_11.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_12.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_13.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_14.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_15.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_16.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_17.find((element: any) => element.id === idCountry)?.gf + 
                      this.dataSource_18.find((element: any) => element.id === idCountry)?.gf;

      element.ga = this.dataSource_1.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_2.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_3.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_4.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_5.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_6.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_7.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_8.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_9.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_10.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_11.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_12.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_13.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_14.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_15.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_16.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_17.find((element: any) => element.id === idCountry)?.ga + 
                      this.dataSource_18.find((element: any) => element.id === idCountry)?.ga;
      
      element.gd = this.dataSource_1.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_2.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_3.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_4.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_5.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_6.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_7.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_8.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_9.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_10.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_11.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_12.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_13.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_14.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_15.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_16.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_17.find((element: any) => element.id === idCountry)?.gd + 
                      this.dataSource_18.find((element: any) => element.id === idCountry)?.gd;

      element.points =
                      this.dataSource_1.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_2.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_3.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_4.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_5.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_6.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_7.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_8.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_9.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_10.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_11.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_12.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_13.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_14.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_15.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_16.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_17.find((element: any) => element.id === idCountry)?.points + 
                      this.dataSource_18.find((element: any) => element.id === idCountry)?.points + equatorPoints;
    });
  }

  public darkMode() {
    this.darkModeBool = !this.darkModeBool;
    console.log('dark mode', this.darkModeBool)
  }

  public goToPayPal(){
    window.location.href = 'https://paypal.me/DaveBorr';
  }
}