import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CookiesStore } from '@stores/cookies/cookies.store';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss'],
  providers: [CookiesStore],
})
export class CookiesComponent implements OnInit {
  @Input() showModal = false;

  readonly cookiesStore = inject(CookiesStore);
  smallVisible = false;
  largePolicyVisible = false;
  cookiesAccepted = false;

  ngOnInit() {
    this.cookiesAccepted = this.cookiesStore.isCookiesAccepted();
    this.smallVisible = !this.cookiesAccepted;
  }

  acceptCookies() {
    this.cookiesAccepted = true;
    this.cookiesStore.acceptCookies();
    this.smallVisible = false;
  }

  declineCookies() {
    this.cookiesAccepted = false;
    this.cookiesStore.declineCookies();
    this.smallVisible = false;
  }

  showLargePolicy() {
    this.largePolicyVisible = true;
    this.smallVisible = false;
  }

  closeLargePolicy() {
    this.largePolicyVisible = false;
    this.smallVisible = !this.cookiesAccepted;
  }
}
