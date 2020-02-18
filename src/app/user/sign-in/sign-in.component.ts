import {Component} from '@angular/core';
import {AuthService} from '../../common/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './sign-in.component.html'
})
export class SignInComponent {
  login: string;
  password: string;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  singIn() {
    if (this.login && this.password) {
      this.authService.signIn(this.login, this.password).subscribe(() => {
        this.router.navigate(['weather']);
      });
    }
  }
}
