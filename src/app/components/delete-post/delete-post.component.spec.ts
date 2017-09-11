import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePostComponent } from './delete-post.component';

describe('DeletePostComponent', () => {
  let component: DeletePostComponent;
  let fixture: ComponentFixture<DeletePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
