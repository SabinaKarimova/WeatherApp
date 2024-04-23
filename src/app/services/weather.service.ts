import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getWeatherData(cityName:string):Observable<any>{
    var headers={
      'X-RapidAPI-Key':'ea208c94d4msh8955d0af0d5aeedp17f2a2jsn45c1b5819e08',
      'X-RapidAPI-Host':'openweather43.p.rapidapi.com'
    }
    var q=cityName
    var appid=['da0f9c8d90bde7e619c3ec47766a42f4']
    var units='standart'
    return this.http.get<any>(environment.weatherApiBaseUrl,{params:{q,appid,units},headers:headers})
  }
}
