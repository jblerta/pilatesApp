import { Component, HostListener, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent  implements OnInit {

  isMobile!: boolean;

  swiperModules = [IonicSlides];

  sections = [
    {
      sectionName:"Winter Workouts",
      sectionImg:'../../assets/winter.jpg',
    },
    {
      sectionName:"Summer Workouts",
      sectionImg:'../../assets/pilates.webp',
    },
    {
      sectionName:"Quick Workouts",
      sectionImg:'../../assets/pilates.webp',
    },
    {
      sectionName:"Power 15min Workouts",
      sectionImg:'../../assets/pilates.webp',
    },
    {
      sectionName:"Easy Yoga Workouts",
      sectionImg:'../../assets/pilates.webp',
    },
    {
      sectionName:"Easy Yoga Workouts",
      sectionImg:'../../assets/pilates.webp',
    },
    {
      sectionName:"Easy Yoga Workouts",
      sectionImg:'../../assets/pilates.webp',
    }
  ]


  constructor(private router: Router) {
  
  }
  ngOnInit() {
  }

  navigateToWorkoutList() {
    this.router.navigate(['/user/workout-list']); 
  }


}
