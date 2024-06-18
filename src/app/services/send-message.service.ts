import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor(
    private http: HttpClient
  ) { }

  public sendMessage(message: any){
    return this.http.post("https://conmebol-message-default-rtdb.firebaseio.com/datos.json", message)
  }
}
