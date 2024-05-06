import { Injectable } from '@angular/core';
import { PatientsEntity } from '../models/patients.entity';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/services/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsApiService extends BaseService<PatientsEntity> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/patients';
  }
}
