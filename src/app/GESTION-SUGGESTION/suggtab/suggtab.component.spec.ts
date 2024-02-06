import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggtabComponent } from './suggtab.component';

describe('SuggtabComponent', () => {
  let component: SuggtabComponent;
  let fixture: ComponentFixture<SuggtabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggtabComponent]
    });
    fixture = TestBed.createComponent(SuggtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
