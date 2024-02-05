import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandtabComponent } from './brandtab.component';

describe('BrandtabComponent', () => {
  let component: BrandtabComponent;
  let fixture: ComponentFixture<BrandtabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandtabComponent]
    });
    fixture = TestBed.createComponent(BrandtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
