import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss'],
})
export class AddSectionComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  formData = { name: '', description: '', image: null, video: null };
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
      } else if (fileType === 'video') {
        this.formData.video = file;
        this.videoPreview = reader.result as string;
      }
    };

    reader.readAsDataURL(file);
  }

  onSave() {
    console.log('Saving form data:', this.formData);
  }

  onNext() {
    }

}
