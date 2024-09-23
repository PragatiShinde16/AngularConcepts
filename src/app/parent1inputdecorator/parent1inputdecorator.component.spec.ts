import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent1inputdecoratorComponent } from './parent1inputdecorator.component';

describe('Parent1inputdecoratorComponent', () => {
  let component: Parent1inputdecoratorComponent;
  let fixture: ComponentFixture<Parent1inputdecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parent1inputdecoratorComponent]
    });
    fixture = TestBed.createComponent(Parent1inputdecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
