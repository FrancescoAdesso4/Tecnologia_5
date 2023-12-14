import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoUtilitarieComponent } from './auto-utilitarie.component';

describe('AutoUtilitarieComponent', () => {
  let component: AutoUtilitarieComponent;
  let fixture: ComponentFixture<AutoUtilitarieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoUtilitarieComponent]
    });
    fixture = TestBed.createComponent(AutoUtilitarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
