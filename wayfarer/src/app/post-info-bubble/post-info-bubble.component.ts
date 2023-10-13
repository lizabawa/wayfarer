import { Component } from '@angular/core';

@Component({
  selector: 'app-post-info-bubble',
  templateUrl: './post-info-bubble.component.html',
  styleUrls: ['./post-info-bubble.component.css']
})
export class PostInfoBubbleComponent {
  postTitle: string = "San Francisco";
  cityImage: string = "https://assets.editorial.aetnd.com/uploads/2015/02/topic-golden-gate-bridge-gettyimages-177770941.jpg?width=3840&height=1920&crop=3840%3A1920%2Csmart&quality=75";
  postSummary: string = "SLAM YOUR HANDS"
}
