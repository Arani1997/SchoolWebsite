import { TestBed } from '@angular/core/testing';

import { LoginRegisterResetForgotService } from './login-register-reset-forgot.service';

describe('LoginRegisterResetForgotService', () => {
  let service: LoginRegisterResetForgotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRegisterResetForgotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
