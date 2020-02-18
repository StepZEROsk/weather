import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Weather} from '../entities/weather';

@Injectable()
export class WeatherRestService {

  weatherApiUrl = 'https://api.openweathermap.org/data/2.5';
  weatherApiKey = 'e8b0529eac50a14d9d55bb028cbf244f';

  constructor(
    private http: HttpClient
  ) {}

  getWeather(params): Observable<Weather> {
    return this.http.get<any>(this.weatherApiUrl + '/weather', {
      params: {
        ...params,
        units: 'metric',
        appid: this.weatherApiKey,
      },
    }).pipe(
      map((result) => {
        return {
          cityName: result.name,
          countryCode: result.sys.country,
          weather: result.weather[0].main,
          icon: result.weather[0].icon,
          temp: result.main.temp,
          wind: result.wind.speed,
        };
      }),
    );
  }
}
