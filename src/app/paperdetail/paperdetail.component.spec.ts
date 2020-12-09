import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperdetailComponent } from './paperdetail.component';

describe('PaperdetailComponent', () => {
  let component: PaperdetailComponent;
  let fixture: ComponentFixture<PaperdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
