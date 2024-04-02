import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaxPackageComponent } from './relax-package.component';

describe('RelaxPackageComponent', () => {
  let component: RelaxPackageComponent;
  let fixture: ComponentFixture<RelaxPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelaxPackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelaxPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
