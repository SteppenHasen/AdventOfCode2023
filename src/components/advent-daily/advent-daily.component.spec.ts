import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventDailyComponent } from './advent-daily.component';

describe('AdventDailyComponent', () => {
  let component: AdventDailyComponent;
  let fixture: ComponentFixture<AdventDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventDailyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdventDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
