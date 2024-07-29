export interface Calendar {
    listDates: Date[]
  }

export interface Date {
  matches: Match[]
}
  
export interface Match {
  idMatch: number;
  idLocal: number;
  idVisitor: number;
  golLocal: number;
  golVisitor: number;
}
