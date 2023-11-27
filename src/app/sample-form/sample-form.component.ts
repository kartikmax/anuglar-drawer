import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent {
  form: FormGroup;

  genders = ['male', 'female', 'other'];
  countries = ['USA', 'Canada', 'UK', 'Australia'];
  programmingLanguages = ['JavaScript', 'TypeScript', 'Python', 'Java'];
  fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [25, [Validators.required, Validators.min(18)]],
      gender: ['male', Validators.required],
      sliderValue: [50, Validators.required],
      country: ['', Validators.required],
      programmingLanguage: ['', Validators.required],
      fruits: [[], Validators.required],
    });
  }

  submitForm() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      // You can handle form submission logic here
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
