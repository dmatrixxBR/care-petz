import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientesPageComponent } from './form-clientes-page.component';

describe('FormClientesPageComponent', () => {
  let component: FormClientesPageComponent;
  let fixture: ComponentFixture<FormClientesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormClientesPageComponent]
    });
    fixture = TestBed.createComponent(FormClientesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
