import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumEventComponent } from './premium-event.component';

describe('PremiumEventComponent', () => {
  let component: PremiumEventComponent;
  let fixture: ComponentFixture<PremiumEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
