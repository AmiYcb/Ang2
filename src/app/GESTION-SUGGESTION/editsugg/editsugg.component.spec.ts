import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsuggComponent } from './editsugg.component';

describe('EditsuggComponent', () => {
  let component: EditsuggComponent;
  let fixture: ComponentFixture<EditsuggComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditsuggComponent]
    });
    fixture = TestBed.createComponent(EditsuggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
