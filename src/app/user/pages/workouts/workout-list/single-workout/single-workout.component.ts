import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-workout',
  templateUrl: './single-workout.component.html',
  styleUrls: ['./single-workout.component.scss'],
})
export class SingleWorkoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


  sections =  {image: '../../assets/pilates.webp', videoURL:'../../assets/test12.mp4'};    
    
}
