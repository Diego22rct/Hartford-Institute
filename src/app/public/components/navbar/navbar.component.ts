import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  options = [
    { name: 'Home', link: '/home' },
    { name: 'Mental State Exams', link: '/nursing/mental-state-exams' },
  ];
}
