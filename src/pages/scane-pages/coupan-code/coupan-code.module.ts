import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoupanCodePage } from './coupan-code';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../../redeem-type/redeem-type.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    CoupanCodePage,
  ],
  imports: [
    IonicPageModule.forChild(CoupanCodePage),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
})
export class CoupanCodePageModule {}
