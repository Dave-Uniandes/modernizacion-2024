import { Component, OnInit } from '@angular/core';
import { SendMessageService } from 'src/app/services/send-message.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [DatePipe]
})
export class FooterComponent implements OnInit{

  public enableBtn = false;
  public comment: string = "";

  constructor(
    private sendMessageService: SendMessageService,
    public datepipe: DatePipe
  ) { }

  public ngOnInit(): void {
  }

  public getValue(text: string) {
    this.enableBtn = text.length > 5 ? true : false;
  }

  async send(e: any){
    e.preventDefault();
    const message = {
      city: '',
      country: '',
      message: this.comment,
      date: this.datepipe.transform(new Date(), 'dd-MM-yyyy')
    };

    await fetch('https://api.ipregistry.co/?key=tryout')
    .then(function (response) {
        return response.json();
    })
    .then(function (payload) {
        message.city = payload.location.city;
        message.country = payload.location.country.name;
    });

    this.sendMessageService.sendMessage(message).subscribe(res => {
      alert('Enviado');
      this.comment = '';
      this.enableBtn = false;
    })
  }


}
