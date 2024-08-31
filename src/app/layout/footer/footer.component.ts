import { Component, computed, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CookiesComponent } from './cookies/cookies.component';
import { CookiesStore } from '@stores/cookies/cookies.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, CookiesComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  providers: [CookiesStore],
})
export class FooterComponent {
  showCookies: boolean = false;
  readonly cookiesStore = inject(CookiesStore);

  acceptCookies(): void {
    this.cookiesStore.acceptCookies();
  }

  declineCookies(): void {
    this.cookiesStore.declineCookies();
  }
}
