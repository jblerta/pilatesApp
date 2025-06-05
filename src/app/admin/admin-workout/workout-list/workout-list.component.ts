import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
})
export class WorkoutListComponent  implements OnInit {
  isMobile!: boolean;
  constructor() {   this.checkScreenSize(); }

  ngOnInit() {   this.checkScreenSize();}

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.checkScreenSize();
    }
  
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768; // Adjust based on your breakpoints
    }
  


    sections = [
    {
      sectionName:"Winter Workouts",
      cards: [
        { id: 1, title: 'Card 1', description: 'This is the description for card 1.', image: '../../assets/pilates.webp', videoURL:'../../assets/test12.mp4' },
        { id: 2, title: 'Card 2', description: 'This is the description for card 2.', image: '../../assets/pilates.webp', videoURL:'../../assets/test12.mp4'},
        { id: 3, title: 'Card 3', description: 'This is the description for card 3.', image: '../../assets/pilates.webp', videoURL:'../../assets/test12.mp4'},
        { id: 4, title: 'Card 4', description: 'This is the description for card 4.', image: '../../assets/pilates.webp', videoURL:'../../assets/test12.mp4'},
        { id: 5, title: 'Card 5', description: 'This is the description for card 5.', image: '../../assets/pilates.webp', videoURL:'../../assets/test12.mp4'},
        { id: 6, title: 'Card 6', description: 'This is the description for card 3.', image: '../../assets/pilates.webp', videoURL:'../../assets/test12.mp4' },
        { id: 7, title: 'Card 7', description: 'This is the description for card 4.', image: '../../assets/pilates.webp', videoURL:'../../assets/test12.mp4' },
        { id: 8, title: 'Card 8', description: 'This is the description for card 5.', image: '../../assets/pilates.webp', videoURL:'../../assets/test12.mp4' }
    ],
    }]


}
