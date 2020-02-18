import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {SignInComponent} from './sign-in.component';
import {AuthService} from '../../common/auth/auth.service';
import {of} from 'rxjs';

const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
const authServiceSpy = jasmine.createSpyObj('AuthService', ['signIn']);

describe('SignInComponent Isolated Test', () => {
  let component: SignInComponent;

  beforeEach(async(() => {
    component = new SignInComponent(routerSpy, authServiceSpy);
  }));

  it('Component Created', () => {
    expect(component).toBeTruthy();
  });

  it('Component Init', () => {
    expect(component.login).toBeUndefined();
    expect(component.password).toBeUndefined();
  });
});

describe('SignInComponent Shallow Test', () => {
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignInComponent,
      ],
      imports: [
        BrowserModule,
        FormsModule,
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: authServiceSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
  }));

  it('LoginInput Created', () => {
    const loginInput = fixture.debugElement.nativeElement.querySelector('#loginInput');
    expect(loginInput).toBeDefined();
  });

  it('PasswordInput Created', () => {
    const passwordInput = fixture.debugElement.nativeElement.querySelector('#passwordInput');
    expect(passwordInput).toBeDefined();
  });
});

describe('SignInComponent Integrated Test', () => {
  let fixture: ComponentFixture<SignInComponent>;
  let signInSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignInComponent,
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: authServiceSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    signInSpy = authServiceSpy.signIn.and.returnValue(of({}));
  }));

  it('AuthUser Called', fakeAsync(() => {
    fixture.componentInstance.login = 'test@test.com';
    fixture.componentInstance.password = 'test123';
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button[type=submit]');
    button.click();
    fixture.detectChanges();

    expect(authServiceSpy.signIn).toHaveBeenCalled();
  }));

  it('Redirected to /weather', fakeAsync(() => {
    fixture.componentInstance.login = 'test@test.com';
    fixture.componentInstance.password = 'test123';
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button[type=submit]');
    button.click();
    fixture.detectChanges();

    expect(routerSpy.navigate).toHaveBeenCalled();
    const navArgs = routerSpy.navigate.calls.first().args[0];
    expect(navArgs).toEqual(['weather']);
  }));
});
