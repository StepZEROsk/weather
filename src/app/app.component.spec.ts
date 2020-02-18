import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {appRoutes} from './app.routes';
import {UserModule} from './user/user.module';
import {WeatherModule} from './weather/weather.module';
import {AuthGuard} from './common/auth/auth.guard';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
