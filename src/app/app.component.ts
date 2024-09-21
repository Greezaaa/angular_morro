// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TranslationService } from '@app/services/translatate/translate.service';

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

  constructor(private translationService: TranslationService) {}

  switchLanguage(language: string) {
    this.translationService.switchLanguage(language);
  }
}
