import { Injectable } from '@angular/core';
import { RestService } from '../../assets/rest.service';
import * as moment from "moment";

import { Weather, WeatherSymbol } from './weather';

@Injectable()
export class WeatherService {

	//http://opendata.smhi.se/apidocs/metfcst/parameters.html
	url : string = 'https://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/';
	stockholm : string = 'geotype/point/lon/16.158/lat/58.5812/data.json';
	weatherSymbol : WeatherSymbol[] = this.weatherSymbolDataGet();

	constructor(private restService: RestService) { }

	public smhiDataGet() {
		let request = this.url + this.stockholm;
		return this.restService.endPointGet(request).then(
			response => this.smhiDataParse(response)
		);
	}

	private smhiDataParse(response) {

		let smhiData: Weather = new Weather();
		for (let data of response.timeSeries) {
			let currentDate = moment(data.validTime).format('YYYY-MM-DD');
			if(!smhiData || !smhiData[currentDate]){
				smhiData[currentDate] = {
					date: currentDate,
					time: [{
						time: moment(data.validTime).format('HH:mm:ss'),
						celsius: data.parameters[1].values[0],
						weatherSymbol: this.weatherSymbolByIdGet(data.parameters[18].values[0])
					}]
				};
			}else{
				smhiData[currentDate].time.push({
					time: moment(data.validTime).format('HH:mm:ss'),
					celsius: data.parameters[1].values[0],
					weatherSymbol: this.weatherSymbolByIdGet(data.parameters[18].values[0])
				});
			}
		}
		return smhiData;
	}

	private weatherSymbolDataGet() {
		return [
			{
				id: 1,
				name: 'Clear sky'
			},{
				id: 2,
				name: 'Nearly clear sky'
			},{
				id: 3,
				name: 'Variable cloudiness'
			},{
				id: 4,
				name: 'Halfclear sky'
			},{
				id: 5,
				name: 'Cloudy sky'
			},{
				id: 6,
				name: 'Overcast'
			},{
				id: 7,
				name: 'Fog'
			},{
				id: 8,
				name: 'Rain showers'
			},{
				id: 9,
				name: 'Thunderstorm'
			},{
				id: 10,
				name: 'Light sleet'
			},{
				id: 11,
				name: 'Snow showers'
			},{
				id: 12,
				name: 'Rain'
			},{
				id: 13,
				name: 'Thunder'
			},{
				id: 14,
				name: 'Sleet'
			},{
				id: 15,
				name: 'Snowfall'
			}
		];
	}

	private weatherSymbolByIdGet(id: number) {
		return this.weatherSymbol[id-1];
	}

}