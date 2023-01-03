import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseProductsComponent } from './base-products.component';

describe('BaseProductsComponent', () => {
  let component: BaseProductsComponent;
  let fixture: ComponentFixture<BaseProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
