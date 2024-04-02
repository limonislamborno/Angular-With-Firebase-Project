import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignPackageComponent } from './foreign-package.component';

describe('ForeignPackageComponent', () => {
  let component: ForeignPackageComponent;
  let fixture: ComponentFixture<ForeignPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForeignPackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForeignPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
