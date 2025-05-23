import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss'],
})
export class AddSectionComponent  implements OnInit {

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  formData = { name: '', description: '', image: null };
  imagePreview: string | null = null;
  videoPreview: string | null = null;

  onFileSelected(event: any, fileType: 'image' | 'video') {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (fileType === 'image') {
        this.formData.image = file;
        this.imagePreview = reader.result as string;
        } //else if (fileType === 'video') {
      //   this.formData.video = file;
      //   this.videoPreview = reader.result as string;
      // }
    };

    reader.readAsDataURL(file);
  }

  onSave() {
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

        this.http.post('http://localhost:3000/api/sections', formDataToSend)
      .subscribe({
        next: (res) => {
          console.log('Success:', res);
          // Reset form or navigate
        },
        error: (err) => {
          console.error('Error:', err);
        }
      });
   }

  onNext() {
    }

}
