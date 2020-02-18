import {NgModule} from '@angular/core';
import {AuthService} from './auth.service';
import {UserRestService} from '../rest/services/user-rest.service';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ],
  providers: [
    AuthService,
    UserRestService,
  ],
})
export class AuthModule {}
