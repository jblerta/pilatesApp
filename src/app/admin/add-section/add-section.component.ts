import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SectionService } from 'src/app/services/section.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss'],
})
export class AddSectionComponent  implements OnInit {

  formData = { name: '', description: '', image: null };
  imagePreview: string | null = null;

  constructor(private http: HttpClient,private setionSrv:SectionService, private router: Router){}

  ngOnInit(): void {
  }



  onFileSelected(event: any, fileType: 'image' | 'video') {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        this.formData.image = file;
        this.imagePreview = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  onSave() {
      console.log('✅ onSave triggered');
   const formDataToSend = new FormData();
   formDataToSend.append('name',this.formData.name);
   formDataToSend.append('description', this.formData.description);
      if (this.formData.image) {
      formDataToSend.append('image', this.formData.image);
    }

        // If you want to also handle video later:
    // if (this.formData.video) {
    //   formDataToSend.append('video', this.formData.video);
    // }

    this.setionSrv.addSection(formDataToSend).subscribe({
        next: (res) => {
          console.log('Success:', res);
          this.router.navigate(['/admin/admin-workout']);
          // Reset form or navigate
        },
        error: (err) => {
          console.error('Error:', err);
        }
      });

      //      this.http.post('http://localhost:3000/api/section/upload', formDataToSend)
      // .subscribe({
      //   next: (res) => {
      //     console.log('Success:', res);
      //     // Reset form or navigate
      //   },
      //   error: (err) => {
      //     console.error('Error:', err);
      //   }
      // });
   }

   

  onNext() {
    }

}
