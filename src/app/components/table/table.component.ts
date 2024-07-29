import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RecordService } from './record.service';
import { Record } from './record';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  constructor(private recordService: RecordService) {}

  @Input() darkMode: any;
  public darkModeTable = '';
  public records: Record[] = [];
  private flags = {
    '1': { flag: 'argentina', country: 'Argentina' },
    '2': { flag: 'bolivia', country: 'Bolivia' },
    '3': { flag: 'brasil', country: 'Brasil' },
    '4': { flag: 'chile', country: 'Chile' },
    '5': { flag: 'colombia', country: 'Colombia' },
    '6': { flag: 'ecuador', country: 'Ecuador' },
    '7': { flag: 'paraguay', country: 'Paraguay' },
    '8': { flag: 'peru', country: 'Peru' },
    '9': { flag: 'uruguay', country: 'Uruguay' },
    '10': { flag: 'venezuela', country: 'Venezuela' },
  } as any

  ngOnInit(): void {
    this.getRecords();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.darkMode) {
      this.darkModeTable = 'table-dark';
    } else {
      this.darkModeTable = 'table-light';
    }
  }

  getRecords(): void {
    this.recordService.getRecords()
    this.recordService.records.subscribe((records) => {
      records = records.map((record) => {
        return {
          ...record,
          flag: `assets/flags/${this.flags[record.id + '']['flag']}.png`,
          country: this.flags[record.id + '']['country']
        }
      })
      this.records = records.sort((p1: any, p2: any) => (p1.points < p2.points) ? 1 : (p1.points > p2.points) ? -1 : 0);
    });
  }
 
}
