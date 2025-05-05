import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UserRoutingModule } from './user-routing.module'; // Routes for user pages
import { SharedModule } from './shared/shared.module'; // Import shared module for MenuComponent and other shared components

import { HomePage } from './pages/home/home.page';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { MyWorkoutsComponent } from './pages/my-workouts/my-workouts.component';
import { WorkoutsComponent } from './pages/workouts/workouts.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { WorkoutListComponent } from './pages/workouts/workout-list/workout-list.component';
import { SingleWorkoutComponent } from './pages/workouts/workout-list/single-workout/single-workout.component';
import { RecipeListComponent } from './pages/recipes/recipe-list/recipe-list.component';
import { SingleRecipeComponent } from './pages/recipes/recipe-list/single-recipe/single-recipe.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    
    HomePage,
    RecipesComponent,
    MyWorkoutsComponent,
    WorkoutsComponent,
    MyAccountComponent,
    WorkoutListComponent,
    SingleWorkoutComponent,
    SingleRecipeComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRoutingModule,  
    SharedModule        
  ]
})
export class UserModule {}
