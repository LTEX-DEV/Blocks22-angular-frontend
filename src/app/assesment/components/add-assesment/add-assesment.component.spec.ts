import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssesmentComponent } from './add-assesment.component';

describe('AddAssesmentComponent', () => {
  let component: AddAssesmentComponent;
  let fixture: ComponentFixture<AddAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
