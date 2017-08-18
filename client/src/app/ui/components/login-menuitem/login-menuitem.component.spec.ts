import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMenuitemComponent } from './login-menuitem.component';

describe('LoginMenuitemComponent', () => {
  let component: LoginMenuitemComponent;
  let fixture: ComponentFixture<LoginMenuitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMenuitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
