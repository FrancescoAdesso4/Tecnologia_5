import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSportiveComponent } from './auto-sportive.component';

describe('AutoSportiveComponent', () => {
  let component: AutoSportiveComponent;
  let fixture: ComponentFixture<AutoSportiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoSportiveComponent]
    });
    fixture = TestBed.createComponent(AutoSportiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
