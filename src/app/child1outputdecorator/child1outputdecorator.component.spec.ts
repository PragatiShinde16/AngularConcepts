import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1outputdecoratorComponent } from './child1outputdecorator.component';

describe('Child1outputdecoratorComponent', () => {
  let component: Child1outputdecoratorComponent;
  let fixture: ComponentFixture<Child1outputdecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child1outputdecoratorComponent]
    });
    fixture = TestBed.createComponent(Child1outputdecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
