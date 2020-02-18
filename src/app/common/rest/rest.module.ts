import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {WeatherRestService} from './services/weather-rest.service';
import {UserRestService} from './services/user-rest.service';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [
    UserRestService,
    WeatherRestService,
  ],
})
export class RestModule {}
