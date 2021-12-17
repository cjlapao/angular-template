import { Message, MessageType } from '../../../shared/models/message';
import { MessageService } from '../../../shared/services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/modules/auth/services/account.service';
import { ALERT_SERVICE } from 'src/app/constants/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private accountSvc: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    private msgSvc: MessageService
  ) {
    this.loginForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params.action);
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loading = true;
      let form = {
        user: this.loginForm.controls['username'].value,
        password: this.loginForm.controls['password'].value,
        tenantId: this.loginForm.controls['tenantId'].value,
      };
      console.log(`Logging User ${form.user}`);
      this.accountSvc
        .login(form.user, form.password)
        .subscribe((user) => {
          this.loading = false;
          if (user) {
            this.router.navigateByUrl('');
          } else {
            const msg: Message = {
              id: 'test',
              type: MessageType.Error,
              message: 'Username or password are incorrect',
              autoClose: 3000,
              service: ALERT_SERVICE,
            };
            this.msgSvc.sendNotification(msg);
            this.loading = false
          }
        },
        () => {
          const msg: Message = {
            id: 'test',
            type: MessageType.Error,
            message: 'Username or password are incorrect',
            autoClose: 3000,
            service: ALERT_SERVICE,
          };
          this.msgSvc.sendNotification(msg);
          this.loading = false
        });
    }
  }
}
