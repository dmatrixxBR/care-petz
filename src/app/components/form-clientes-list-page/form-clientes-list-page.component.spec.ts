import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientesListPageComponent } from './form-clientes-list-page.component';

describe('FormClientesListPageComponent', () => {
  let component: FormClientesListPageComponent;
  let fixture: ComponentFixture<FormClientesListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormClientesListPageComponent]
    });
    fixture = TestBed.createComponent(FormClientesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
