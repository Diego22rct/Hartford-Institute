import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMentalStateExamsComponent } from './page-mental-state-exams.component';

describe('PageMentalStateExamsComponent', () => {
  let component: PageMentalStateExamsComponent;
  let fixture: ComponentFixture<PageMentalStateExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageMentalStateExamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageMentalStateExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
