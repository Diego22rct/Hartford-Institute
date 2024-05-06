import { Component, Input } from '@angular/core';
import { ExamEntity } from '../../models/exam.entity';

@Component({
  selector: 'app-exam-card',
  templateUrl: './exam-card.component.html',
  styleUrl: './exam-card.component.css'
})
export class ExamCardComponent {

  @Input() exam: ExamEntity = new ExamEntity();

}
