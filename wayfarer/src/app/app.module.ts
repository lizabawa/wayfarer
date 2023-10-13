import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopicComponent } from './topic/topic.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { InfoBubbleComponent } from './info-bubble/info-bubble.component';
import { PostInfoBubbleComponent } from './post-info-bubble/post-info-bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TopicComponent,
    HomeComponent,
    CityInfoComponent,
    InfoBubbleComponent,
    PostInfoBubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
