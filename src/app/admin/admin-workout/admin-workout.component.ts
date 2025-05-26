import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-workout',
  templateUrl: './admin-workout.component.html',
  styleUrls: ['./admin-workout.component.scss'],
})
export class AdminWorkoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

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

}
