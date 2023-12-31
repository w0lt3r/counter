import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterLayoutComponent } from './counter-layout.component';

describe('CounterLayoutComponent', () => {
  let component: CounterLayoutComponent;
  let fixture: ComponentFixture<CounterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
