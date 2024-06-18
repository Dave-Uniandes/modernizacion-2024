import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  public dataSourceSortered: any = [];
  @Input() dataSource: any;
  @Input() darkMode: any;
  public darkModeTable = ''

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.darkMode){
      this.darkModeTable = 'table-dark'
    }else{
      this.darkModeTable = 'table-light'
    }
  }
  
}
