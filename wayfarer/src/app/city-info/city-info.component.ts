import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css'],
})
export class CityInfoComponent implements OnInit {
  cityInfo: any;
  currentWeather: any;
  map!: Map;

  constructor(private weatherService: WeatherService) {}

  getWeather(city: string): void {
    this.weatherService.getCurrentWeather(city).subscribe((data) => {
      this.currentWeather = data;
     
      // console.log(this.map)
    });
  }
  ngOnInit(): void {
    this.getWeather('Miami');
    setTimeout(() => {
      this.initMap();

      }, 500);
  }

  private initMap(): void {

    const baseLayer = new TileLayer({
      source: new OSM()
    });

    const weatherLayer = new TileLayer({
      source: new OSM({url:'https://tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png?appid=5bf9b7b0e8f7f4caf071365c73e2330c'})
    });
    
    weatherLayer.setOpacity(0.6)
    this.map = new Map({
      target: 'radarMap',
      layers: [baseLayer, weatherLayer],
      view: new View({
        center: [0, 0],
        zoom: 5
      })
    });

  }
}
