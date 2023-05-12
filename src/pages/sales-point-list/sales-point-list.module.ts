import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesPointListPage } from './sales-point-list';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../redeem-type/redeem-type.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    SalesPointListPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesPointListPage),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
})
export class SalesPointListPageModule {}
