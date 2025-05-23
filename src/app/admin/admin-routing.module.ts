import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSectionComponent } from './add-section/add-section.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [

  {
    path: '',  // Default route within the admin feature
    redirectTo: 'add-section',
    pathMatch: 'full'
  },
  {
    path: 'add-section', component: AddSectionComponent},
  {
    path: 'subscription', component: SubscriptionComponent
  }
  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
