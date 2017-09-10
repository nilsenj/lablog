import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNavComponent } from './post-nav.component';

describe('PostNavComponent', () => {
  let component: PostNavComponent;
  let fixture: ComponentFixture<PostNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
