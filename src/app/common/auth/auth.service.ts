import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserRestService} from '../rest/services/user-rest.service';
import {User} from '../rest/entities/user';

@Injectable()
export class AuthService {
  loggedUserSubject$: BehaviorSubject<User>;

  constructor(
    private userRestService: UserRestService,
  ) {
    this.loggedUserSubject$ = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('loggedUser')));
  }

  getUser() {
    return this.loggedUserSubject$.value;
  }

  signIn(userName: string, password: string): Observable<User> {
    return this.userRestService.authUser(userName, password).pipe(
      map((user) => {
      if (user && user.token) {
        localStorage.setItem('loggedUser', JSON.stringify(user));
        this.loggedUserSubject$.next(user);
      }
      return user;
    }));
  }

  signOut(): Observable<null> {
    localStorage.removeItem('loggedUser');
    this.loggedUserSubject$.next(null);
    return of(null);
  }
}
