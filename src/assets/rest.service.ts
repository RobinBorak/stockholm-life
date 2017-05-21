import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class RestService {

	constructor(private http: Http) { }
	public endPointGet(url) {
		return this.httpGet(url);
	}

	private httpGet(url){
		return this.http.get(url).toPromise().then(
			response => {
				console.log(url + ': ', response.json());
				return response.json()
			}
		);
	}

}