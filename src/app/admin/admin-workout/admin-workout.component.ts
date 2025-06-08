import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-workout',
  templateUrl: './admin-workout.component.html',
  styleUrls: ['./admin-workout.component.scss'],
})
export class AdminWorkoutComponent  implements OnInit {

    sections:any[] = [];


  constructor(private sectionService: SectionService, private router: Router) { }

  ngOnInit() {
     this.loadSection();
  }

navigateToWorkoutList(sectionId: string) {
  console.log('Navigating to section:', sectionId);
  this.router.navigate(['/admin/workout-list', sectionId]);
}
   loadSection(){
    this.sectionService.getAllSections().subscribe(
      (data) => {
        this.sections = data;
        console.log('✅ DATA loaded from backend:', this.sections);
      },
      (error) => console.error('❌ Error loading workouts', error)
    );
  }


}
