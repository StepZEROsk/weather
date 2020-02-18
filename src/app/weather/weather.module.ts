import {NgModule} from '@angular/core';
import {WeatherComponent} from './weather.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {WeatherService} from './weather.service';
import {RestModule} from '../common/rest/rest.module';

@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RestModule,
  ],
  exports: [
  ],
  providers: [
    WeatherService,
  ],
})
export class WeatherModule {}
