import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { translationProviders } from '@app/services/translate/translate.config';
import { AppComponent } from '@app/app.component';
import { appConfig } from '@app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    ...translationProviders,
    ...appConfig.providers,
  ],
}).catch((err) => console.error(err));
