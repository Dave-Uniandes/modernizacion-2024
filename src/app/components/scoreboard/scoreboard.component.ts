import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CalendarService } from './calendar.service';
import { RecordService } from '../table/record.service';
import { Calendar, Date } from './calendar';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  @Input() selectedDate : Date | any = {} as Date
  @Input() fixtureSelected: number = 1;
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

  constructor(private calendarService: CalendarService) {}


  ngOnInit(): void {
  }

  public deleteValues(fixture: number) {
    this.calendarService.deleteData().subscribe((response) => {
      if (response === 'Delete') {
        location.reload();
      }
    });
  }

  public selection(fixture: number) {
    this.fixtureSelected = fixture;
    this.fselected.emit(fixture);
  }

  public calculate(fixture: number) {
    this.calculateF.emit(fixture);
  }
}
