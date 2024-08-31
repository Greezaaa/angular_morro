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
  @Input() showModal = false; // Input property to control modal display

  readonly cookiesStore = inject(CookiesStore); // Injecting the CookiesStore
  smallVisible = false; // State for small modal visibility
  largeVisible = false; // State for large modal visibility
  cookiesAccepted = false; // Track if cookies have been accepted

  ngOnInit() {
    // Check if cookies have already been accepted
    this.cookiesAccepted = this.cookiesStore.isCookiesAccepted();
    this.smallVisible = !this.cookiesAccepted; // Show small modal if cookies are not accepted
  }

  // Method to accept cookies
  acceptCookies() {
    this.cookiesAccepted = true;
    this.cookiesStore.acceptCookies(); // Save acceptance in store
    this.smallVisible = false; // Hide small modal
  }
  // Method to deslikl cookies
  declineCookies() {
    this.cookiesAccepted = false;
    this.cookiesStore.declineCookies(); // Save declinatane in store
    this.smallVisible = false; // Hide small modal
  }

  // Method to open the large cookie policy
  showLargePolicy() {
    this.largeVisible = true;
    this.smallVisible = false; // Hide small modal
  }

  // Method to close the large cookie policy
  closeLargePolicy() {
    this.largeVisible = false;
    this.smallVisible = !this.cookiesAccepted;
  }
}
