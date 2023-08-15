import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServicosPageComponent } from './form-servicos-page.component';

describe('FormServicosPageComponent', () => {
  let component: FormServicosPageComponent;
  let fixture: ComponentFixture<FormServicosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormServicosPageComponent]
    });
    fixture = TestBed.createComponent(FormServicosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
