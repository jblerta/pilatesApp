import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './pages/recipes/recipes.component';
import { MyWorkoutsComponent } from './pages/my-workouts/my-workouts.component';
import { WorkoutsComponent } from './pages/workouts/workouts.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { WorkoutListComponent } from './pages/workouts/workout-list/workout-list.component';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'recipes', component: RecipesComponent },
  { path: 'my-workouts', component: MyWorkoutsComponent },
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'account', component: MyAccountComponent },
  { path:'workout-list', component:WorkoutListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
