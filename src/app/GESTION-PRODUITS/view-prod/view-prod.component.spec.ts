import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProdComponent } from './view-prod.component';

describe('ViewProdComponent', () => {
  let component: ViewProdComponent;
  let fixture: ComponentFixture<ViewProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProdComponent]
    });
    fixture = TestBed.createComponent(ViewProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
