import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent1outputdecoratorComponent } from './parent1outputdecorator.component';

describe('Parent1outputdecoratorComponent', () => {
  let component: Parent1outputdecoratorComponent;
  let fixture: ComponentFixture<Parent1outputdecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parent1outputdecoratorComponent]
    });
    fixture = TestBed.createComponent(Parent1outputdecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
