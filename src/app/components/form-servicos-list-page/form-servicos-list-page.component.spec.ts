import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServicosListPageComponent } from './form-servicos-list-page.component';

describe('FormServicosListPageComponent', () => {
  let component: FormServicosListPageComponent;
  let fixture: ComponentFixture<FormServicosListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormServicosListPageComponent]
    });
    fixture = TestBed.createComponent(FormServicosListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
