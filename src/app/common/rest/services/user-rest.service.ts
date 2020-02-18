import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../entities/user';

@Injectable()
export class UserRestService {
  authUser(userName: string, password: string): Observable<User> {
    console.log('authUser', userName, password);
    return of({
      id: 1,
      email: 'test@test.com',
      firstName: 'Donnie',
      lastName: 'Brasco',
      token: 'test123',
    });
  }
}
