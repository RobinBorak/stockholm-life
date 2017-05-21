export class Weather {
  date: string;
  time: WeatherTime[];
}

export class WeatherTime {
	time: string;
	celsius: number;
	weatherSymbol: WeatherSymbol;
}

export class WeatherSymbol {
	id: number;
	name: string;
}