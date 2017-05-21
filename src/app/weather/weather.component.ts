import { Component } from '@angular/core';
import { WeatherService } from './Weather.service'

@Component({
  selector: 'weather',
  providers: [WeatherService],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent{


	title : string = 'Weather page';
	smhiData;
	smhiDataKeys;
	isCollapsed : Number[] = [];
	constructor(private weatherService : WeatherService) {
		this.init();
	}

	init(){
		this.weatherService.smhiDataGet().then(
			response => {
				this.smhiData = response;
				this.smhiDataKeys = Object.keys(this.smhiData);
				console.log(this);
			}
		);
	}


}
