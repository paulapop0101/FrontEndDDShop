import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVariantDialogComponent } from './edit-variant-dialog.component';

describe('EditVariantDialogComponent', () => {
  let component: EditVariantDialogComponent;
  let fixture: ComponentFixture<EditVariantDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVariantDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVariantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
