import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from 'src/app/services/workout.service';


@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
})
export class WorkoutListComponent  implements OnInit {
  isMobile!: boolean;
  sectionId!: string;
  wourkoutId!: string;
  workouts:any[]=[];

  constructor(private route:ActivatedRoute, private workoutService: WorkoutService) {   this.checkScreenSize(); }

  ngOnInit() { 
    this.sectionId = this.route.snapshot.paramMap.get('id')!;
    console.log('🧩 Section ID:', this.sectionId);
    this.checkScreenSize();
    this.loadWorkouts();
  }


    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.checkScreenSize();
    }
  
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768; // Adjust based on your breakpoints
    }
    
    loadWorkouts(){
      this.workoutService.getWorkoutsBySection(this.sectionId).subscribe(
      (data) => {
        this.workouts = data;
        console.log('✅ DATA loaded from backend:', this.workouts);
      },
      (error) => console.error('❌ Error loading workouts', error)
      )
    }


    deleteWorkout(workoutId: string) {
      console.log('log',workoutId);
      
    this.workoutService.deleteWorkoutSection(workoutId).subscribe({
      next: (res) => {
        console.log('✅ Workout deleted', res);
        this.loadWorkouts(); 
      },
      error: (err) => {
        console.error('❌ Error deleting workout', err);
      }
    });

    }

   


}
