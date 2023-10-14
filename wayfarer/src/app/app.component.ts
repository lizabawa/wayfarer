import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wayfarer';
  citySearch: string = '';
  constructor(private http: HttpClient) { }
  findCity(city: string): void {
    this.http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${this.citySearch}&appid=052f26926ae9784c2d677ca7bc5dec98&`)
    .subscribe((response: any) => {
      
    console.log(response);
    }) 
  }
}
