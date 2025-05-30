import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AdminRoutingModule } from './admin-routing.module';
import { AddSectionComponent } from './add-section/add-section.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MenuComponent } from './sharedAdmin/menu/menu.component';
import { AdminWorkoutComponent } from './admin-workout/admin-workout.component';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AddSectionComponent,
    SubscriptionComponent,
    AdminWorkoutComponent,
    MenuComponent
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    IonicModule
  ]
})
export class AdminModule {

  ngOnInit(): void {
  // Initialization logic here (optional)
}
 }
