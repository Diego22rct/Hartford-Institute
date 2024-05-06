import { Injectable } from '@angular/core';
import { ExaminersEntity } from '../models/examiners.entity';
import { BaseService } from '../../shared/services/base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExaminersService extends BaseService<ExaminersEntity> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = 'examiners';
  }
}
