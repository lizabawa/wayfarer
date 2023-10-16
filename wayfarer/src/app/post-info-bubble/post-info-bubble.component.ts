import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-post-info-bubble',
  templateUrl: './post-info-bubble.component.html',
  styleUrls: ['./post-info-bubble.component.css']
})
export class PostInfoBubbleComponent {
  postTitle: string = "San Francisco";
  cityImage: string = "https://assets.editorial.aetnd.com/uploads/2015/02/topic-golden-gate-bridge-gettyimages-177770941.jpg?width=3840&height=1920&crop=3840%3A1920%2Csmart&quality=75";
  postSummary: string = "SLAM YOUR HANDS"

  posts: any= [];

  
  constructor(private http: HttpClient, private router: Router){}

  ngOnInit() {
    this.router.events.subscribe((evt: any) => {
      this.posts = [];
      if (evt instanceof NavigationEnd) {
        if(evt.url.length> 6){

          this.http.get(`https://newsdata.io/api/1/news?apikey=pub_31144c11ee91a6edd0ba96fafd5ff6ed7b7b4&q=${evt.url.slice(6)}`)
          .subscribe(res => {
              (res as any).results.forEach((post: any) => {
                if(this.posts.length < 2){
                  if(post.image_url == null){
                    post.image_url = `https://source.unsplash.com/random?${evt.url.slice(6)}`
                  }
                  this.posts.push(post);
                }

        })
        
      })

  }}})

  }

}
