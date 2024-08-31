// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule,
    MainComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'morro_ng_playground';

  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en');

    // Optionally, use the browser's language if available
    const browserLang = this.translate.getBrowserLang();
    if (browserLang && browserLang.match(/en|es/)) {
      this.translate.use(browserLang);
    } else {
      this.translate.use('en');
    }
  }

  // Method to switch languages
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
