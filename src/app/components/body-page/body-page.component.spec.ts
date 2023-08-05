import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPageComponent } from './body-page.component';

describe('BodyPageComponent', () => {
  let component: BodyPageComponent;
  let fixture: ComponentFixture<BodyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyPageComponent]
    });
    fixture = TestBed.createComponent(BodyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
