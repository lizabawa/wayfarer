import { Component} from '@angular/core';
import { AppCitySearchService } from '../app-city-search.service';
import { distinctUntilChanged } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-info-bubble',
  templateUrl: './info-bubble.component.html',
  styleUrls: ['./info-bubble.component.css']
})
export class InfoBubbleComponent {
  img: any;
  newCity:any;
  constructor(private appCitySearch: AppCitySearchService, private http: HttpClient) { }
  
  defaultCityName: string = "San Francisco";
  defaultCityImage: string = "https://assets.editorial.aetnd.com/uploads/2015/02/topic-golden-gate-bridge-gettyimages-177770941.jpg?width=3840&height=1920&crop=3840%3A1920%2Csmart&quality=75"

  cities: any = [{name: this.defaultCityName, image: this.defaultCityImage}];

  ngOnInit(): void {

    this.appCitySearch.cityInfo.pipe(distinctUntilChanged())
    .subscribe(res => {
      
      this.img = `https://source.unsplash.com/random?${(res as any)[0].name}`
      
      
        
        
    
      this.newCity = {name: (res as any)[0].name, image: this.img}

      if(this.cities.length === 5){

        this.cities.shift();

      }
      this.cities.push(this.newCity);
      
    });
  }
  
  
  
  
  
  
}
