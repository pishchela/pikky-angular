import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';

import { MyMissingTranslationHandler } from './missing-translation.handler';
import { customTranslateLoader } from './custom-translate-loader';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MyMissingTranslationHandler
      },
      loader: {
        provide: TranslateLoader,
        useFactory: customTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule,
  ],
  providers: [
    HttpClient,
  ],
})
export class CustomTranslationModule {}
