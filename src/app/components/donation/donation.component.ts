import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent {

  public showCard = true;
  @Input() allowClose: any = true;

  public closeCard(){

    this.showCard = false;
  }

  public goToPayPal(){
    window.location.href = 'https://paypal.me/DaveBorr';
  }

}
