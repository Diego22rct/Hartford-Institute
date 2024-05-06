import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base-api.service';
import { MentalStateExamsEntity } from '../models/mental-state-exams.entity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MentalStateExamsApiService extends BaseService<MentalStateExamsEntity> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = 'mental-state-exams';
  }
}
