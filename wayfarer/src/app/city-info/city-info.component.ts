import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css'],
})
export class CityInfoComponent implements OnInit {
  cityInfo: any;
  currentWeather: any;

  constructor(private weatherService: WeatherService) {}

  getWeather(city: string): void {
    this.weatherService.getCurrentWeather(city).subscribe((data) => {
      this.currentWeather = data;
    });
  }
  ngOnInit(): void {
    this.getWeather('London');
  }
}
