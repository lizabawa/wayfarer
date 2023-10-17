import { Component } from '@angular/core';

@Component({
  selector: 'app-info-bubble',
  templateUrl: './info-bubble.component.html',
  styleUrls: ['./info-bubble.component.css']
})
export class InfoBubbleComponent {
  cityName: string = "San Francisco";
  cityImage: string = "https://assets.editorial.aetnd.com/uploads/2015/02/topic-golden-gate-bridge-gettyimages-177770941.jpg?width=3840&height=1920&crop=3840%3A1920%2Csmart&quality=75"

}
