import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSectionComponent } from './add-section/add-section.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AdminWorkoutComponent } from './admin-workout/admin-workout.component';

const routes: Routes = [

  {
    path: '',  
    redirectTo: 'add-section',
    pathMatch: 'full'
  },
  {
    path: 'add-section', component: AddSectionComponent
  },
   {
    path: 'admin-workout', component: AdminWorkoutComponent
  },
  {
    path: 'subscription', component: SubscriptionComponent
  }
  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
