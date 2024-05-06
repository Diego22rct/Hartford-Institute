import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HartfordInstitute';
  options = [
    { name: 'Home', link: '/home' },
    { name: 'Mental State Exams', link: '/nursing/mental-state-exams' },
  ];
}
