import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent  implements OnInit {
  showDiscountSection = false;
  saleStartDate!: string; 
  saleEndDate!: string; 
  formattedSaleStartDate!: string;
  formattedSaleEndDate!: string;

  constructor() { }

  ngOnInit() {}

  

  toggleDiscountSection() {
    this.showDiscountSection = !this.showDiscountSection;
  }

  updateDisplayedDate(event: any) {
  const value = event.detail.value;
  if (value) {
    const date = new Date(value);
    if(this.saleStartDate){

      this.formattedSaleStartDate = date.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    }
    else{
        this.formattedSaleEndDate = date.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    }
  }
}


}
