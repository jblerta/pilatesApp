import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectionService } from 'src/app/services/section.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.scss'],
})
export class AddWorkoutComponent  implements OnInit {

  formData = {
    title: '',
    description: '',
    section_id: '',   // <- Store selected section here
    thumbnail: null,
    video: null
  };
  sections: any[] = [];

  constructor(private sectionService: SectionService, private workoutService:WorkoutService,private router:Router) { }

  ngOnInit() {
    this.sectionService.getAllSections().subscribe({
      next: (data) => this.sections = data,
      error: (err) => console.error('Failed to load sections', err)
    });
  }

  

  imagePreview: string | null = null;
  videoPreview: string | null = null;

  onFileSelected(event: any, fileType: 'image' | 'video') {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (fileType === 'image') {
        this.formData.thumbnail = file;
        this.imagePreview = reader.result as string;
        } else if (fileType === 'video') {
        this.formData.video = file;
        this.videoPreview = reader.result as string;
      }
    };

    reader.readAsDataURL(file);
  }


    onSave() {
      console.log('✅ onSave triggered');

      const formDataToSend = new FormData();
      formDataToSend.append('title',this.formData.title);
      formDataToSend.append('section_id',this.formData.section_id)
      formDataToSend.append('description',this.formData.description);
      if (this.formData.thumbnail) {
      formDataToSend.append('thumbnail', this.formData.thumbnail);
      }
      if (this.formData.video) {
        formDataToSend.append('video', this.formData.video);
      }

      this.workoutService.addWorkout(formDataToSend).subscribe({
        next: (res) => {
          console.log('Success:',res); 
          this.router.navigate(['/admin/workout-list',res.section_id]);    
        },
        error: (err) =>{
          console.log('Error',err);
          
        }
      })
    
  
    }}


