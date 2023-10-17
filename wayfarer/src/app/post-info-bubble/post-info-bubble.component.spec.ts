import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInfoBubbleComponent } from './post-info-bubble.component';

describe('PostInfoBubbleComponent', () => {
  let component: PostInfoBubbleComponent;
  let fixture: ComponentFixture<PostInfoBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostInfoBubbleComponent]
    });
    fixture = TestBed.createComponent(PostInfoBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
