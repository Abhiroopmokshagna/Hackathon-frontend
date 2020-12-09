import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentdetailComponent } from './patentdetail.component';

describe('PatentdetailComponent', () => {
  let component: PatentdetailComponent;
  let fixture: ComponentFixture<PatentdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
