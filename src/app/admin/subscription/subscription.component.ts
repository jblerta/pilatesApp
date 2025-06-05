import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent  implements OnInit {
  showDiscountSection = false;

  constructor() { }

  ngOnInit() {}

  

  toggleDiscountSection() {
    this.showDiscountSection = !this.showDiscountSection;
  }

}
