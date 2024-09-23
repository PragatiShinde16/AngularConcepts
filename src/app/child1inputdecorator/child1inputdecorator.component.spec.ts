import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1inputdecoratorComponent } from './child1inputdecorator.component';

describe('Child1inputdecoratorComponent', () => {
  let component: Child1inputdecoratorComponent;
  let fixture: ComponentFixture<Child1inputdecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child1inputdecoratorComponent]
    });
    fixture = TestBed.createComponent(Child1inputdecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
