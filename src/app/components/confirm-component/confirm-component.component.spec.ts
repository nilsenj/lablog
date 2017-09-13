import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmComponentComponent } from './confirm-component.component';

describe('ConfirmComponentComponent', () => {
  let component: ConfirmComponentComponent;
  let fixture: ComponentFixture<ConfirmComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
