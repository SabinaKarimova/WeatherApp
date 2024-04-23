import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service:WeatherService){

  }
  weather:any
  cityName:string='Baku';
  ngOnInit(): void {
    this.getWeatherData(this.cityName);

  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
  }
  getWeatherData(cityName:string){
    this.service.getWeatherData(cityName).subscribe({
      next:(response)=>{
        console.log(response);
        this.weather=response
      }
    })
  }
}
