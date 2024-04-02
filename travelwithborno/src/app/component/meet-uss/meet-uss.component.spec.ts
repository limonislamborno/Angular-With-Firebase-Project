import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetUssComponent } from './meet-uss.component';

describe('MeetUssComponent', () => {
  let component: MeetUssComponent;
  let fixture: ComponentFixture<MeetUssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetUssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetUssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
