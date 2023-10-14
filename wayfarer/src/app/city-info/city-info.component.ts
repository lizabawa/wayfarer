import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import * as L from 'leaflet'


@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css'],
})
export class CityInfoComponent implements OnInit, AfterViewInit {
  cityInfo: any;
  currentWeather: any;
  private map!: L.Map;

  constructor(private weatherService: WeatherService) {}

  getWeather(city: string): void {
    this.weatherService.getCurrentWeather(city).subscribe((data) => {
      this.currentWeather = data;
     
      // console.log(this.map)
    });
  }
  ngOnInit(): void {
    this.getWeather('Miami');
  }

 

  private initMap(): void {
    console.log(document.getElementById('radarMap'))
    if (document.getElementById('radarMap')) {

      this.map = L.map("radarMap").setView([51.505, -0.09], 10);
      console.log(this.map)
    L.tileLayer('https://tile.openweathermap.org/map/radar/{z}/{x}/{y}.png?appid=052f26926ae9784c2d677ca7bc5dec98', {
      maxZoom: 19,
      attribution: 'Weather data © OpenWeatherMap',
    }).addTo(this.map);
  } else {
    // You can log here for debugging
    console.error('RadarMap DOM element not found!');
  }
}

ngAfterViewInit(): void {
  this.initMap();
  this.getWeather("Orlando")
//       console.log(this.map);
console.log(document.getElementById("radarMap"));

}
}