import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProdUserComponent } from './view-prod-user.component';

describe('ViewProdUserComponent', () => {
  let component: ViewProdUserComponent;
  let fixture: ComponentFixture<ViewProdUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProdUserComponent]
    });
    fixture = TestBed.createComponent(ViewProdUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
