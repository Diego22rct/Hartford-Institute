export class ExaminersEntity {
  id: number;
  firstName: string;
  lastName: string;
  nationalProviderIdentifier: string;

  constructor(id: number = 0, firstName: string = '', lastName: string = '', nationalProviderIdentifier: string = '') {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationalProviderIdentifier = nationalProviderIdentifier;
  }
}
