import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgendaPageComponent } from './form-agenda-page.component';

describe('FormAgendaPageComponent', () => {
  let component: FormAgendaPageComponent;
  let fixture: ComponentFixture<FormAgendaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAgendaPageComponent]
    });
    fixture = TestBed.createComponent(FormAgendaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
