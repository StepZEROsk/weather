import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {AppComponent} from './app.component';
import {UserModule} from './user/user.module';
import {WeatherModule} from './weather/weather.module';
import {AuthGuard} from './common/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UserModule,
    WeatherModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
