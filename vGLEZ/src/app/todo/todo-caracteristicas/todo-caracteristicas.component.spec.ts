import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCaracteristicasComponent } from './todo-caracteristicas.component';

describe('TodoCaracteristicasComponent', () => {
  let component: TodoCaracteristicasComponent;
  let fixture: ComponentFixture<TodoCaracteristicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCaracteristicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
