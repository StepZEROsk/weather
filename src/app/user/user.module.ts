import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthModule} from '../common/auth/auth.module';
import {SignInComponent} from './sign-in/sign-in.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
  ],
  exports: [
  ],
  providers: [
  ],
})
export class UserModule {}
