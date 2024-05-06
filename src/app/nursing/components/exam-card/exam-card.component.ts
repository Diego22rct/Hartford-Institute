import { Component, Input } from '@angular/core';
import { ExamEntity } from '../../models/exam.entity';
import { PatientsEntity } from '../../models/patients.entity';
import { ExaminersEntity } from '../../models/examiners.entity';
import { MentalStateExamsEntity } from '../../models/mental-state-exams.entity';

@Component({
  selector: 'app-exam-card',
  templateUrl: './exam-card.component.html',
  styleUrl: './exam-card.component.css'
})
export class ExamCardComponent {

  @Input() exam: ExamEntity = new ExamEntity();

}
