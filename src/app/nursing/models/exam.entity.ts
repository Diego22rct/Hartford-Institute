export class ExamEntity {
  photoUrl: string;
  patientName: string;
  bornDate: string;
  examDate: string;
  examinerName: string
  nationalProviderIdentifier: string;
  totalScore: number;

  constructor(photoUrl: string = '', patientName: string = '', bornDate: string = '', examDate: string = '', examinerName: string = '', nationalProviderIdentifier: string = '', totalScore: number = 0) {
    this.photoUrl = photoUrl;
    this.patientName = patientName;
    this.bornDate = bornDate;
    this.examDate = examDate;
    this.examinerName = examinerName;
    this.nationalProviderIdentifier = nationalProviderIdentifier;
    this.totalScore = totalScore;
  }
}
