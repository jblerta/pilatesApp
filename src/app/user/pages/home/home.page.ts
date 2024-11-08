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

  sections = [
    {
      sectionName:"Winter Workouts",
      cards: [
        { id: 1, title: 'Card 1', description: 'This is the description for card 1.', image: '../../assets/pilates.webp' },
        { id: 2, title: 'Card 2', description: 'This is the description for card 2.', image: '../../assets/pilates.webp' },
        { id: 3, title: 'Card 3', description: 'This is the description for card 3.', image: '../../assets/pilates.webp' },
        { id: 4, title: 'Card 4', description: 'This is the description for card 4.', image: '../../assets/pilates.webp' },
        { id: 5, title: 'Card 5', description: 'This is the description for card 5.', image: '../../assets/pilates.webp' },
        { id: 6, title: 'Card 6', description: 'This is the description for card 3.', image: '../../assets/pilates.webp' },
        { id: 7, title: 'Card 7', description: 'This is the description for card 4.', image: '../../assets/pilates.webp' },
        { id: 8, title: 'Card 8', description: 'This is the description for card 5.', image: '../../assets/pilates.webp' }
    ],
    visibleStart: 0,
    visibleEnd: 5
    },
    {
      sectionName:"Summer Workouts",
      cards: [
        { id: 1, title: 'Card 1', description: 'This is the description for card 1.', image: '../../assets/pilates.webp' },
        { id: 2, title: 'Card 2', description: 'This is the description for card 2.', image: '../../assets/pilates.webp' },
        { id: 3, title: 'Card 3', description: 'This is the description for card 3.', image: '../../assets/pilates.webp' },
        { id: 4, title: 'Card 4', description: 'This is the description for card 4.', image: '../../assets/pilates.webp' },
        { id: 5, title: 'Card 5', description: 'This is the description for card 5.', image: '../../assets/pilates.webp' },
        { id: 3, title: 'Card 3', description: 'This is the description for card 3.', image: '../../assets/pilates.webp' },
        { id: 4, title: 'Card 4', description: 'This is the description for card 4.', image: '../../assets/pilates.webp' },
        { id: 5, title: 'Card 5', description: 'This is the description for card 5.', image: '../../assets/pilates.webp' }
    ],
    visibleStart: 0,
    visibleEnd: 5
    },
    {
      sectionName:"Quick Workouts",
      cards: [
        { id: 1, title: 'Card 1', description: 'This is the description for card 1.', image: '../../assets/pilates.webp' },
        { id: 2, title: 'Card 2', description: 'This is the description for card 2.', image: '../../assets/pilates.webp' },
        { id: 3, title: 'Card 3', description: 'This is the description for card 3.', image: '../../assets/pilates.webp' },
        { id: 4, title: 'Card 4', description: 'This is the description for card 4.', image: '../../assets/pilates.webp' },
        { id: 5, title: 'Card 5', description: 'This is the description for card 5.', image: '../../assets/pilates.webp' }
    ],
    visibleStart: 0,
    visibleEnd: 5
    },
  ]


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

  goToNext(sectionIndex: number) {
    const section = this.sections[sectionIndex];
    if (section.visibleEnd < section.cards.length) {
      section.visibleStart += 1;
      section.visibleEnd += 1;
    }
  }

  goToPrevious(sectionIndex: number) {
    const section = this.sections[sectionIndex];
    if (section.visibleStart > 0) {
      section.visibleStart -= 1;
      section.visibleEnd -= 1;
    }
  }

  isNextDisabled(sectionIndex: number): boolean {
    const section = this.sections[sectionIndex];
    return section.visibleEnd >= section.cards.length;
  }
  
  isPreviousDisabled(sectionIndex: number): boolean {
    const section = this.sections[sectionIndex];
    return section.visibleStart <= 0;
  }


}
