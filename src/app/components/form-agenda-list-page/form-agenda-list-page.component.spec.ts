import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgendaListPageComponent } from './form-agenda-list-page.component';

describe('FormAgendaListPageComponent', () => {
  let component: FormAgendaListPageComponent;
  let fixture: ComponentFixture<FormAgendaListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAgendaListPageComponent]
    });
    fixture = TestBed.createComponent(FormAgendaListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
