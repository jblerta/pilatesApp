import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AddSectionComponent } from './add-section/add-section.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MenuComponent } from './sharedAdmin/menu/menu.component';
import { AdminWorkoutComponent } from './admin-workout/admin-workout.component';
import { WorkoutListComponent } from './admin-workout/workout-list/workout-list.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AddSectionComponent,
    SubscriptionComponent,
    AdminWorkoutComponent,
    WorkoutListComponent,
    AddWorkoutComponent,
    MenuComponent
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class AdminModule {

  ngOnInit(): void {
  // Initialization logic here (optional)
}
 }
