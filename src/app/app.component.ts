// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignUpVisible: boolean = true;
  overlayLeft: string = '77%'; // Initial position for sign up

  showLoginForm() {
    this.isSignUpVisible = false;
    this.overlayLeft = '20%'; // Move overlay to show login
  }

  showSignUpForm() {
    this.isSignUpVisible = true;
    this.overlayLeft = '77%'; // Move overlay to show sign up
  }
}
