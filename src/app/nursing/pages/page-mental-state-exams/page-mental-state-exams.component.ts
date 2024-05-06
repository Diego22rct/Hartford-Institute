import { Component, OnInit } from '@angular/core';
import { PatientsApiService } from '../../services/patients-api.service';
import { ExaminersService } from '../../services/examiners.service';
import { MentalStateExamsApiService } from '../../services/mental-state-exams-api.service';

import { PatientsEntity } from '../../models/patients.entity';
import { ExamEntity } from '../../models/exam.entity';
import { MentalStateExamsEntity } from '../../models/mental-state-exams.entity';
import { ExaminersEntity } from '../../models/examiners.entity';
@Component({
  selector: 'app-page-mental-state-exams',
  templateUrl: './page-mental-state-exams.component.html',
  styleUrl: './page-mental-state-exams.component.css'
})
export class PageMentalStateExamsComponent implements OnInit {
  constructor(private patientsApi: PatientsApiService, private examinersApi: ExaminersService, private mentalStateExamsApi: MentalStateExamsApiService) {
  }


  public patients: Array<PatientsEntity> = [];
  public examiners: Array<ExaminersEntity> = [];
  public exams: Array<ExamEntity> = [];
  public mentalStateExams: Array<MentalStateExamsEntity> = [];

  ngOnInit(): void {
    this.getPatients();
    this.getExaminers();
    this.getMentalStateExams();
  }

  getPatients(): void {
    this.patientsApi.getAll().subscribe((patients: any) => {
      this.patients = patients;
      console.log(this.patients);
    });
  }

  getExaminers(): void {
    this.examinersApi.getAll().subscribe((examiners: any) => {
      this.examiners = examiners;
      console.log(this.examiners);
    });
  }

  getMentalStateExams(): void {
    this.mentalStateExamsApi.getAll().subscribe((mentalStateExams: any) => {
      this.mentalStateExams = mentalStateExams;
      console.log(this.mentalStateExams);
    });
  }
}
