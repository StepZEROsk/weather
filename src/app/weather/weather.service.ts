import {Injectable} from '@angular/core';
import {Observable, zip} from 'rxjs';
import {WeatherRestService} from '../common/rest/services/weather-rest.service';

@Injectable()
export class WeatherService {

  constructor(
    private weatherRestService: WeatherRestService,
  ) {}

  getWeather(locations): Observable<any> {
    const observables = [];

    for (const location of locations) {
      let params = {};
      if (location.zip) {
        params = { zip: location.zip + ',' + location.country };
      } else if (location.city) {
        params = { q: location.city + ',' + location.country };
      }
      observables.push(this.weatherRestService.getWeather(params));
    }

    return zip.apply(null, observables);
  }
}
