import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsuggComponent } from './addsugg.component';

describe('AddsuggComponent', () => {
  let component: AddsuggComponent;
  let fixture: ComponentFixture<AddsuggComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsuggComponent]
    });
    fixture = TestBed.createComponent(AddsuggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
