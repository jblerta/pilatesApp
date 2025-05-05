import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.scss'],
})
export class SingleRecipeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  sections =  {image: '../../assets/pilates.webp', videoURL:'../../assets/test12.mp4'};    

}
