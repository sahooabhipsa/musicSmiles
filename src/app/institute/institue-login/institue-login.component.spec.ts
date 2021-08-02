import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitueLoginComponent } from './institue-login.component';

describe('InstitueLoginComponent', () => {
  let component: InstitueLoginComponent;
  let fixture: ComponentFixture<InstitueLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitueLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitueLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
