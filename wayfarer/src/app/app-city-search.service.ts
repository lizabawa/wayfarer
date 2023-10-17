import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppCitySearchService {

  constructor(private http: HttpClient) { }
  cityInfo = new Subject();

  
  findCityDetails(city: string){
    
    return this.http.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=052f26926ae9784c2d677ca7bc5dec98&`)

  }

}
