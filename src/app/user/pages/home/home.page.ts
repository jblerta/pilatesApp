import { Component, HostListener, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { IonicSlides } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isMobile!: boolean;

  swiperModules = [IonicSlides];

  cards = [
    { id: 1, title: 'Card 1', description: 'This is the description for card 1.', image: 'assets/card1.jpg' },
    { id: 2, title: 'Card 2', description: 'This is the description for card 2.', image: 'assets/card2.jpg' },
    { id: 3, title: 'Card 3', description: 'This is the description for card 3.', image: 'assets/card3.jpg' },
    { id: 4, title: 'Card 4', description: 'This is the description for card 4.', image: 'assets/card4.jpg' },
    { id: 5, title: 'Card 5', description: 'This is the description for card 5.', image: 'assets/card5.jpg' },

  ];


  constructor(private router: Router) {
    this.checkScreenSize();
  }
  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // Adjust based on your breakpoints
  }



}
