import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSectionComponent } from './add-section/add-section.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [

  {
    path: 'admin',  // Default route within the admin feature
    redirectTo: 'admin/add-section',
    pathMatch: 'full'
  },
  {
    path: 'admin/add-section',  // Admin route for adding a section
    component: AddSectionComponent
  },
  {
    path: 'admin/subscription', // Admin route for managing subscriptions
    component: SubscriptionComponent
  }
  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
