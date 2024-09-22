import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language');
    const browserLang = this.getFullBrowserLang();
    const languageToUse = savedLanguage || browserLang || 'en-GB';
    this.translate.setDefaultLang(languageToUse);
    this.translate.use(languageToUse);
    if (!savedLanguage) {
      localStorage.setItem('language', languageToUse);
    }
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
  getFullBrowserLang(): string {
    const browserLang = this.translate.getBrowserCultureLang();
    console.log('Detected Browser Language:', browserLang);

    // TODO: Check local lang if needed to make a use of it in future
    // if (browserLang === 'en-US' || browserLang === 'en-GB') {
    //   return browserLang;
    // } else if (browserLang === 'es-ES' || browserLang === 'es-MX') {
    //   return browserLang;
    // } else if (browserLang === 'fr-FR' || browserLang === 'fr-CA') {
    //   return browserLang;
    // } else if (browserLang === 'de-DE' || browserLang === 'de-AT') {
    //   return browserLang;
    // } else if (browserLang === 'it-IT') {
    //   return browserLang;
    // }

    if (browserLang?.startsWith('en')) {
      return 'en-GB';
    } else if (browserLang?.startsWith('es')) {
      return 'es-ES';

      // TODO: Add more langs to use if case
      // } else if (browserLang?.startsWith('fr')) {
      //   return 'fr-FR';
      // } else if (browserLang?.startsWith('de')) {
      //   return 'de-DE';
      // } else if (browserLang?.startsWith('it')) {
      //   return 'it-IT';
      // } else if (browserLang?.startsWith('uk')) {
      // return 'uk-UK';
    }
    return 'es-ES';
  }
}
