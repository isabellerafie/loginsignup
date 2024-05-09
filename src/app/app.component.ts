// app.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { compareValidator } from './compare.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignUpVisible: boolean = true;
  isRestaurantSelected: boolean = false;
  isOrganizationSelected: boolean = false;
  overlayLeft: string = '77%';
  signUpForm: FormGroup; // Declare the property

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, compareValidator('password')]]
    });
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      country: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]], 
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, compareValidator('password')]],
      license: ['', Validators.required],
      logo: ['', Validators.required],
      accountType: ['', Validators.required]
    });
    
  }

  showLoginForm() {
    this.isSignUpVisible = false;
    this.overlayLeft = '20%';
  }

  showSignUpForm() {
    this.isSignUpVisible = true;
    this.overlayLeft = '77%';

    if (!this.isRestaurantSelected && !this.isOrganizationSelected) {
      console.log("Please select an account type (Restaurant/Organization).");
      return;
    }
  }

  onRadioChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (value === "restaurant") {
      this.isRestaurantSelected = true;
      this.isOrganizationSelected = false;
    } else if (value === "organization") {
      this.isRestaurantSelected = false;
      this.isOrganizationSelected = true;
    }
  }

  submitSignUpForm() {
    if (this.signUpForm.valid) {
      // Submit the form data
    } else {
      // Form is invalid, handle accordingly
    }
  }

  
}
