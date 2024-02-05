import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittabComponent } from './edittab.component';

describe('EdittabComponent', () => {
  let component: EdittabComponent;
  let fixture: ComponentFixture<EdittabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdittabComponent]
    });
    fixture = TestBed.createComponent(EdittabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
