export class MentalStateExamsEntity {
  id: number;
  patientId: number;
  examinerId: number;
  examDate: string;
  orientationScore: number;
  registrationScore: number;
  attentionAndCalculationScore: number;
  recallScore: number;
  languageScore: number;

  constructor(id: number = 0, patientId: number = 0, examinerId: number = 0, examDate: string = '', orientationScore: number = 0, registrationScore: number = 0, attentionAndCalculationScore: number = 0, recallScore: number = 0, languageScore: number = 0) {
    this.id = id;
    this.patientId = patientId;
    this.examinerId = examinerId;
    this.examDate = examDate;
    this.orientationScore = orientationScore;
    this.registrationScore = registrationScore;
    this.attentionAndCalculationScore = attentionAndCalculationScore;
    this.recallScore = recallScore;
    this.languageScore = languageScore;
  }
}
