import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent  implements OnInit {

selectedRecipe(){
this.router.navigate(['/user/recipe-list']); 
}
  sections = [
    {
      sectionName:"Winter Workouts",
      sectionImg:'../../assets/pilates.webp',
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


}
