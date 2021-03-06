import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogoModule } from '../../components/logo/logo.module';
import { DynamicFontSizeModule } from '../../components/dynamic-font-size/dynamic-font-size.module';
import { AmountPage } from './amount';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AmountPage,
  ],
  imports: [
    IonicPageModule.forChild(AmountPage),
    TranslateModule ,
    DynamicFontSizeModule ,
    LogoModule
  ],
  exports: [
    AmountPage
  ]
})
export class AmountPageModule {}