import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { AppCitySearchService } from './app-city-search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
findRoute(): any { return document.querySelector("app-home")
}
  title = 'wayfarer';
  citySearch: string = '';
  searchSubject = new Subject();
  currentRoute = this.route.url;


  constructor(private appCitySearch: AppCitySearchService, private route: ActivatedRoute) { }
  findCity(city: string): void {
    this.searchSubject.next(city);
    this.currentRoute = this.route.url;

}

ngOnInit(): void {
  this.currentRoute = this.route.url;
  this.searchSubject.pipe(
    debounceTime(1000),
    distinctUntilChanged()
  ).subscribe(city => { 
    this.appCitySearch.findCityDetails(city as string).subscribe(res => {
      
      this.appCitySearch.cityInfo.next(res);
      this.citySearch = '';
      console.log(this.currentRoute = this.route.url)
})
});

}
}
