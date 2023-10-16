import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { AppCitySearchService } from './app-city-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wayfarer';
  citySearch: string = '';
  searchSubject = new Subject();
  


  constructor(private appCitySearch: AppCitySearchService, private router: Router) { }
  findCity(city: string): void {
    this.searchSubject.next(city);
    

}

ngOnInit(): void {
  this.searchSubject.pipe(
    debounceTime(1000),
    distinctUntilChanged()
  ).subscribe(city => { 
    this.appCitySearch.findCityDetails(city as string).subscribe(res => {
      
      this.appCitySearch.cityInfo.next(res);
      this.citySearch = '';
      
})
});

}
}
