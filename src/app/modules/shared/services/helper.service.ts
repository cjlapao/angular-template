import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private router: Router) {}

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  getBaseUrl(): string {
    if( environment.apiPrefix) {
      return `${environment.apiBaseUrl}${environment.apiPrefix}`
    } else {
      return environment.apiBaseUrl
    }
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
