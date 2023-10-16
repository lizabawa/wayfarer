import { Component, ViewChild, OnInit } from '@angular/core';
import { AppCitySearchService } from '../app-city-search.service';
import { AppComponent } from '../app.component';

import { WeatherService } from '../weather.service';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { useGeographic } from 'ol/proj';
import LayerSwitcher from 'ol-layerswitcher';
import Group from 'ol/layer/Group';
import { distinctUntilChanged } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css'],
})
export class CityInfoComponent implements OnInit {
  cityName: string = "";
  currentWeather: any;
  map!: Map;
  userLocation: any;

  constructor(private weatherService: WeatherService, private citySearchService: AppCitySearchService, private http:HttpClient) {}
 


  getWeather(city: string): void {
    this.weatherService.getCurrentWeather(city).subscribe((data) => {
      this.currentWeather = data;

      
    });
  }
  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position) {
            console.log(position);
            this.userLocation = {
              coord:{
                lon: position.coords.longitude,
                lat: position.coords.latitude
              }
             
              
            };
            setTimeout(() => {
              this.http.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${this.userLocation.coord.lat}&lon=${this.userLocation.coord.lon}&appid=5bf9b7b0e8f7f4caf071365c73e2330c`).subscribe((data) => {
                this.getWeather(( data as any)[0].name)
                this.initMap(this.userLocation, true);});
            }, 500)
            
            
            
              }});}
    this.citySearchService.cityInfo.pipe()
    .subscribe(res => {this.cityName= (res as any)[0].name
      this.getWeather(this.cityName)
      setTimeout(() => {
        this.initMap(this.currentWeather, true);
  
      }, 500);
      });
    this.cityName? this.getWeather(this.cityName) : this.getWeather('Miami');
    
    setTimeout(() => {
      this.initMap(this.currentWeather, false);

    }, 500);
  }

  private initMap(currentWeather: any, changeCoords:boolean): void {
    useGeographic();
    if (changeCoords) {
      this.map.getView().setCenter([currentWeather.coord.lon, currentWeather.coord.lat]);
      return
    }
    const baseLayer = new TileLayer({
      title: 'Base Layer',
      type: 'base',
      source: new OSM()
    }as any);

    const weatherLayer = new TileLayer({
      title: 'Precipitation',
      source: new OSM({
        url: 'https://tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png?appid=5bf9b7b0e8f7f4caf071365c73e2330c',
      })
    }as any);

    const tempLayer = new TileLayer({
      title: 'Temperature',
      source: new OSM({
        url: 'https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=5bf9b7b0e8f7f4caf071365c73e2330c',
      })
    }as any);

    const cloudLayer = new TileLayer({
      title: 'Clouds',
      source: new OSM({
        url: 'https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=5bf9b7b0e8f7f4caf071365c73e2330c',
      })
    }as any);

    const weatherGroup = new Group({
      layers: [weatherLayer, tempLayer, cloudLayer]
    
    });

    weatherGroup.set('title', 'Weather Layers');
   
    weatherLayer.setOpacity(0.6);
    tempLayer.setOpacity(0.6);
    cloudLayer.setOpacity(0.6);

    this.map = new Map({
      target: 'radarMap',
      layers: [baseLayer, weatherGroup],
      view: new View({
        center: [currentWeather.coord.lon, currentWeather.coord.lat],
        zoom: 7,
      }),
    });
    const layerSwitcher = new LayerSwitcher({
      reverse: true,
      groupSelectStyle: 'none'
      
      
    });

   
  }
}
