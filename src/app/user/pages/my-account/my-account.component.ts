import { Component, HostListener,OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  cards = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 3', description: 'Description 3' }
  ];
  currentSlide = 0;

  goToNext() {
    if (this.currentSlide < this.cards.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Loop back to the start
    }
    this.updateCarousel();
  }

  goToPrevious() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.cards.length - 1; // Go to the last card
    }
    this.updateCarousel();
  }

  updateCarousel() {
    const offset = -this.currentSlide * 100;
    const carousel = document.querySelector('.carousel') as HTMLElement;
    if (carousel) {
      carousel.style.transform = `translateX(${offset}%)`;
    }
  }

  @HostListener('swipeleft', ['$event']) onSwipeLeft() {
    this.goToNext();
  }

  @HostListener('swiperight', ['$event']) onSwipeRight() {
    this.goToPrevious();
  }

}
