import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  declarations: [],
  imports: [
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') })
  ],
  exports: [
    NgxEchartsModule
  ]
}) export class NgxEchartsConfigModule {

}
