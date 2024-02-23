import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdTabComponent } from './prod-tab.component';

describe('ProdTabComponent', () => {
  let component: ProdTabComponent;
  let fixture: ComponentFixture<ProdTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdTabComponent]
    });
    fixture = TestBed.createComponent(ProdTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
