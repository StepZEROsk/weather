import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../common/auth/auth.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WeatherService} from './weather.service';
import {Weather} from '../common/rest/entities/weather';

@Component({
  templateUrl: './weather.component.html'
})
export class WeatherComponent {

  weatherForm: FormGroup;
  weather: Weather[];
  error: string;

  get locations(): FormArray {
    return this.weatherForm.get('locations') as FormArray;
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private weatherService: WeatherService,
  ) {
    this.buildForm();
  }

  singOut() {
    this.authService.signOut().subscribe(() => {
      this.router.navigate(['/user/sign-in']);
    });
  }

  buildForm() {
    this.weatherForm = this.formBuilder.group({
      locations: this.formBuilder.array([]),
    });

    this.addLocation('Bratislava', null, 'SK');
    this.addLocation(null, '90001', 'US');
  }

  addLocation(city: string = null, zip: string = null, country: string = null) {
    const locationGroup = this.formBuilder.group({
      city: this.formBuilder.control(city),
      zip: this.formBuilder.control(zip),
      country: this.formBuilder.control(country),
    });

    locationGroup.valueChanges.subscribe(() => {
      this.updateLocationValidity(locationGroup);
    });
    this.updateLocationValidity(locationGroup);
    this.locations.push(locationGroup);
  }

  updateLocationValidity(fg: FormGroup) {
    fg.get('city').setValidators([Validators.required]);
    fg.get('zip').setValidators([Validators.required]);
    fg.get('country').setValidators([Validators.required]);

    if (fg.get('city').value) {
      fg.get('zip').setValidators(null);
    }

    if (fg.get('zip').value) {
      fg.get('city').setValidators(null);
    }

    fg.get('zip').updateValueAndValidity({ emitEvent: false });
    fg.get('city').updateValueAndValidity({ emitEvent: false });
  }

  decreaseLocation() {
    this.locations.removeAt(this.locations.length - 1);
  }

  getWeather() {
    const locations = this.locations.value;
    this.weather = [];

    this.weatherService.getWeather(locations).subscribe((weather) => {
      this.error = null;
      this.weather = weather;
    }, () => {
      this.error = 'Error while loading weather. Check your input data!';
    });
  }
}
