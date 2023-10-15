import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98`);

  }
}
