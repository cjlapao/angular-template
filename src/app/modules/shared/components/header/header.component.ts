import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/modules/auth/services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private accountService: AccountService) { }

  ngOnInit() {
  }

  logout() {
    this.accountService.logout()
    this.router.navigateByUrl("/auth/login")
  }

}
