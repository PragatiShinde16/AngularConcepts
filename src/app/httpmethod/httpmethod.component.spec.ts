import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpmethodComponent } from './httpmethod.component';

describe('HttpmethodComponent', () => {
  let component: HttpmethodComponent;
  let fixture: ComponentFixture<HttpmethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpmethodComponent]
    });
    fixture = TestBed.createComponent(HttpmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
