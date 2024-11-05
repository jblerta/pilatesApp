import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    HomePage,
    RecipesComponent,
    MyWorkoutsComponent,
    WorkoutsComponent,
    MyAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRoutingModule,  // Import routing for user-specific routes
    SharedModule        // Import shared module to use MenuComponent and other shared components
  ]
})
export class UserModule {}
