import { Component, HostListener, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { SectionService } from 'src/app/services/section.service';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent  implements OnInit {

  isMobile!: boolean;
  sections:any[] = [];

  swiperModules = [IonicSlides];

  // sections = [
  //   {
  //     sectionName:"Winter Workouts",
  //     sectionImg:'../../assets/winter.jpg',
  //   },
  //   {
  //     sectionName:"Summer Workouts",
  //     sectionImg:'../../assets/pilates.webp',
  //   },
  //   {
  //     sectionName:"Quick Workouts",
  //     sectionImg:'../../assets/pilates.webp',
  //   },
  //   {
  //     sectionName:"Power 15min Workouts",
  //     sectionImg:'../../assets/pilates.webp',
  //   },
  //   {
  //     sectionName:"Easy Yoga Workouts",
  //     sectionImg:'../../assets/pilates.webp',
  //   },
  //   {
  //     sectionName:"Easy Yoga Workouts",
  //     sectionImg:'../../assets/pilates.webp',
  //   },
  //   {
  //     sectionName:"Easy Yoga Workouts",
  //     sectionImg:'../../assets/pilates.webp',
  //   }
  // ]


  constructor(private router: Router, private sectionService: SectionService) {
  
  }
  ngOnInit() {
    this.loadSection();
  }

  navigateToWorkoutList() {
    this.router.navigate(['/user/workout-list']); 
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
