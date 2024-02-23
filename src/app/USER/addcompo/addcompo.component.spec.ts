import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompoComponent } from './addcompo.component';

describe('AddcompoComponent', () => {
  let component: AddcompoComponent;
  let fixture: ComponentFixture<AddcompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcompoComponent]
    });
    fixture = TestBed.createComponent(AddcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
